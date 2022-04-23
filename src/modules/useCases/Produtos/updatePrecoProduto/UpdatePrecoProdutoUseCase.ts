import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ProdutosRepository } from "../../../repositories/implementations/ProdutosRepository";

interface IRequest {
    preco: number;
    id: string;
}

@injectable()
class UpdatePrecoProdutoUseCase {
    constructor(
        @inject("ProdutosRepository")
        private produtosRepository: ProdutosRepository) { }

    async execute({ preco, id }: IRequest) {
        const produto = await this.produtosRepository.findById(id);

        if (!produto) {
            throw new AppError("ID inválido: este produto não existe.", 404);
        }

        await this.produtosRepository.update({ preco, id });

        return produto;
    }

}

export { UpdatePrecoProdutoUseCase };