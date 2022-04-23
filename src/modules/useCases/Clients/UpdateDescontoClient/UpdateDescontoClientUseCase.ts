import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ClientesRepository } from "../../../repositories/implementations/ClientesRepository";

interface IUpdateDescontoClientDTO {
    id: string;
    desconto: number;
}

@injectable()
export class UpdateDescontoClientUseCase {
    constructor(
        @inject("ClientesRepository")
        private clientsRepository: ClientesRepository
    ) { }

    async execute({ id, desconto }: IUpdateDescontoClientDTO): Promise<void> {
        const client = await this.clientsRepository.findById(id);

        if (!client) {
            throw new AppError("Usuário não existe", 404);
        }

        await this.clientsRepository.updateDesconto({ id, desconto });
    }
}

export { IUpdateDescontoClientDTO };