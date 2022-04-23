import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
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
            throw new AppError("Usuario não existe");
        }

        await this.clientsRepository.delete(id);
    }
}