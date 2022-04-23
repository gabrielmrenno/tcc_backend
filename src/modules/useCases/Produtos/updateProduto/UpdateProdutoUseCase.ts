import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Produto } from "../../../model/Produto";
import { ProdutosRepository } from "../../../repositories/implementations/ProdutosRepository";

interface IRequest {
    id: string;
    nome?: string;
    grupo?: string;
    unidade?: string;
    preco?: number;
    peso?: number;
}

@injectable()
class UpdateProdutoUseCase {
    constructor(
        @inject("ProdutosRepository")
        private produtosRepository: ProdutosRepository) { }

    async execute({ nome, grupo, unidade, preco, peso, id }: IRequest): Promise<Produto> {
        const produto = await this.produtosRepository.findById(id);

        if (!produto) {
            throw new AppError("ID inválido: este produto não existe.", 404);
        }

        await this.produtosRepository.update({ nome, grupo, unidade, preco, peso, id });

        return produto;
    }
}

export { UpdateProdutoUseCase };