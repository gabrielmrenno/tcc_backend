import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Produto } from "../../../model/Produto";
import { ProdutosRepository } from "../../../repositories/implementations/ProdutosRepository";

@injectable()
class ListProdutoUseCase {
    constructor(
        @inject("ProdutosRepository")
        private produtosRepository: ProdutosRepository) { }
    async execute(): Promise<Produto[]> {
        const produtos = await this.produtosRepository.list();

        if (produtos.length === 0) {
            throw new AppError("Não há produtos para ser listado", 404);
        }

        return produtos;
    }
}

export { ListProdutoUseCase };