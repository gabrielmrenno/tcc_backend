import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";
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
            throw new Error("ID inválido: este produto não existe.")
        }

        return produto;
    }
}

export { ListProdutoByIdUseCase };