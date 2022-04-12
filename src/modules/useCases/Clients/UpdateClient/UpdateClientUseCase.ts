import { inject, injectable } from "tsyringe";
import { ClientesRepository } from "../../../repositories/implementations/ClientesRepository";

interface IUpdateClient {
    id: string,
    nome: string,
    nomeFantasia: string,
    endereco: string
    bairro: string,
    cidade: string,
    cep: string,
    telefone: string,
    email: string,
    nomeContato: string,
    telefoneContato: string
}

@injectable()
export class UpdateClientUseCase {
    constructor(
        @inject("ClientesRepository")
        private clientsRepository: ClientesRepository
    ) { }

    async execute({ id, nome, nomeFantasia, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato }: IUpdateClient): Promise<void> {
        const client = await this.clientsRepository.findById(id);

        if (!client) {
            throw new Error("Usuário não existe");
        }

        await this.clientsRepository.update({ id, nome, nomeFantasia, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato });
    }
}

export { IUpdateClient };