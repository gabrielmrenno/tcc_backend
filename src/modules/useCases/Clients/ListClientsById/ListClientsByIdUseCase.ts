import { inject, injectable } from "tsyringe";
import { Cliente } from "../../../model/Cliente";
import { ClientesRepository } from "../../../repositories/implementations/ClientesRepository";

@injectable()
class ListClientsByIdUseCase {
    constructor(
        @inject("ClientesRepository")
        private clientesRepository: ClientesRepository
    ) { }

    async execute(id: string): Promise<Cliente> {
        const client = await this.clientesRepository.findById(id);

        if (!client) {
            throw new Error("Usuário não existe");
        }

        return client;
    }
}

export { ListClientsByIdUseCase };