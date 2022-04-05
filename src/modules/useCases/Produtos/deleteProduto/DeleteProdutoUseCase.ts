import { inject, injectable } from "tsyringe";
import { ProdutosRepository } from "../../../repositories/implementations/ProdutosRepository";

interface IRequest {
    id: string;
}

@injectable()
class DeleteProdutoUseCase {
    constructor(
        @inject("ProdutosRepository")
        private produtosRepository: ProdutosRepository) { }

    async execute({ id }: IRequest): Promise<void> {
        const produto = await this.produtosRepository.findById(id);

        if (!produto) {
            throw new Error("ID inválido: este produto não existe.");
        }

        this.produtosRepository.delete(id);
    }
}

export { DeleteProdutoUseCase };