import { inject, injectable } from "tsyringe";
import { ClientesRepository } from "../../../repositories/implementations/ClientesRepository";

@injectable()
export class DeleteClientUseCase {
    constructor(
        @inject("ClientesRepository")
        private clientsRepository: ClientesRepository
    ) { }

    async execute(id: string): Promise<void> {
        const client = await this.clientsRepository.findById(id)

        if (!client) {
            throw new Error("Usuario não existe");
        }

        await this.clientsRepository.delete(id);
    }
}