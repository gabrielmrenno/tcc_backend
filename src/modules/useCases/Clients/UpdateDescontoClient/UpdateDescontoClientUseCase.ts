import { inject, injectable } from "tsyringe";
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
            throw new Error("Usuário não existe");
        }

        await this.clientsRepository.updateDesconto({ id, desconto });
    }
}

export { IUpdateDescontoClientDTO };