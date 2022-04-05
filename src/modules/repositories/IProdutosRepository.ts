import { Produto } from "../model/Produto";


interface ICreateProdutoDTO {
    nome: string;
    grupo: string;
    unidade: string;
    preco: number;
    peso: number;
}

interface IUpdateProdutoDTO {
    nome?: string;
    grupo?: string;
    unidade?: string;
    preco?: number;
    peso?: number;
    id: string;
}

interface IProdutosRepository {
    create({ nome, grupo, unidade, preco, peso }: ICreateProdutoDTO): Promise<void>;

    findById(id: string): Promise<Produto>;
    findByNome(nome: string): Promise<Produto>;

    listByGroupo(group: string): Promise<Produto[]>;
    list(): Promise<Produto[]>;

    update({ nome, grupo, unidade, preco, peso }: IUpdateProdutoDTO): Promise<void>

    delete(id: string): Promise<void>;
}

export { IProdutosRepository, ICreateProdutoDTO, IUpdateProdutoDTO };