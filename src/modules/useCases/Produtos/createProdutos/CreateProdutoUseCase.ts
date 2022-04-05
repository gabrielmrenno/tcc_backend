import { ProdutosRepository } from "../../../repositories/implementations/ProdutosRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    nome: string;
    grupo: string;
    unidade: string;
    preco: number;
    peso: number;
}

@injectable()
class CreateProdutoUseCase {
    constructor(
        @inject("ProdutosRepository")
        private produtosRepository: ProdutosRepository) { }
    async execute({ nome, grupo, unidade, preco, peso }: IRequest): Promise<void> {


        const ifProdutoExists = await this.produtosRepository.findByNome(nome);

        if (ifProdutoExists) {
            throw new Error("Nome do Produto já está sendo usado");
        }

        this.produtosRepository.create({ nome, grupo, unidade, preco, peso });
    }
}

export { CreateProdutoUseCase };