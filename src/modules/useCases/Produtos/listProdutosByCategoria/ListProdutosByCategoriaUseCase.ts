import { inject, injectable } from "tsyringe";
import { Produto } from "../../../model/Produto";
import { ProdutosRepository } from "../../../repositories/implementations/ProdutosRepository";

@injectable()
class ListProdutoByGrupoUseCase {
    constructor(
        @inject("ProdutosRepository")
        private produtosRepository: ProdutosRepository) { }

    async execute(grupo: string): Promise<Produto[]> {
        const produtos = await this.produtosRepository.listByGroupo(grupo);

        return produtos;
    }
}

export { ListProdutoByGrupoUseCase };