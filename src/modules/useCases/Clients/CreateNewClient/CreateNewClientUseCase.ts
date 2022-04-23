import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ClientesRepository } from "../../../repositories/implementations/ClientesRepository";
interface ICreateClientDTO {
    nome: string;
    nomeFantasia: string;
    tipoCliente: string;
    endereco: string;
    bairro: string;
    cidade: string;
    cep: string;
    telefone: string;
    email: string;
    nomeContato?: string;
    telefoneContato?: string;
    cnpj: string;
    desconto?: number;
}
@injectable()
class CreateNewClientUseCase {
    constructor(
        @inject("ClientesRepository")
        private clientesRepository: ClientesRepository
    ) { }

    async execute({ nome, nomeFantasia, tipoCliente, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato, cnpj, desconto }: ICreateClientDTO): Promise<void> {
        const ifClientExists = await this.clientesRepository.findByUniqueValues({ nome, nomeFantasia, cnpj });

        if (ifClientExists) {
            throw new AppError("Cliente já existe");
        }

        await this.clientesRepository.create({ nome, nomeFantasia, tipoCliente, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato, cnpj, desconto });
    }
}

export { CreateNewClientUseCase };