import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
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
            throw new AppError("Usuário não existe", 404);
        }

        return client;
    }
}

export { ListClientsByIdUseCase };