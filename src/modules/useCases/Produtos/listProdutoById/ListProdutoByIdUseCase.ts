import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";
import { AppError } from "../../../../errors/AppError";
import { Produto } from "../../../model/Produto";

import { ProdutosRepository } from "../../../repositories/implementations/ProdutosRepository";

interface IRequest {
    id: string;
}

@injectable()
class ListProdutoByIdUseCase {
    constructor(
        @inject("ProdutosRepository")
        private produtoRepository: ProdutosRepository) { }

    async execute({ id }: IRequest): Promise<Produto> {
        const produto = await this.produtoRepository.findById(id);

        if (!produto) {
            throw new AppError("ID inválido: este produto não existe.", 404)
        }

        return produto;
    }
}

export { ListProdutoByIdUseCase };