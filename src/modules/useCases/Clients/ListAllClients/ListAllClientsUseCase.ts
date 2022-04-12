import { inject, injectable } from "tsyringe";
import { Cliente } from "../../../model/Cliente";
import { ClientesRepository } from "../../../repositories/implementations/ClientesRepository";

@injectable()
class ListAllClientsUseCase {
    constructor(
        @inject("ClientesRepository")
        private clientesRepository: ClientesRepository
    ) { }

    async execute(): Promise<Cliente[]> {
        return await this.clientesRepository.listAll();
    }
}

export { ListAllClientsUseCase };