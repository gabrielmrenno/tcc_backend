import { Cliente } from "../model/Cliente";
import { IUpdateClient } from "../useCases/Clients/UpdateClient/UpdateClientUseCase";
import { IUpdateDescontoClientDTO } from "../useCases/Clients/UpdateDescontoClient/UpdateDescontoClientUseCase";

interface ICreateClienteDTO {
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

interface IFindUniqueValuesDTO {
    nome?: string;
    nomeFantasia?: string;
    cnpj: string;
}

interface IClientesRepository {
    create({ nome, nomeFantasia, tipoCliente, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato, cnpj, desconto }: ICreateClienteDTO): Promise<void>;

    findById(id: string): Promise<Cliente>;
    findByUniqueValues({ nome, nomeFantasia, cnpj }: IFindUniqueValuesDTO): Promise<Cliente>;

    listAll(): Promise<Cliente[]>;

    update({ nome, nomeFantasia, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato }: IUpdateClient): Promise<void>;
    updateDesconto({ id, desconto }: IUpdateDescontoClientDTO): Promise<void>;

    delete(id: string): Promise<void>;
}

export { IClientesRepository, ICreateClienteDTO, IFindUniqueValuesDTO };