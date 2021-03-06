import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePrecoProdutoUseCase } from "./UpdatePrecoProdutoUseCase";


class UpdatePrecoProdutoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const updatePrecoProdutoUseCase = container.resolve(UpdatePrecoProdutoUseCase);
        const { preco } = request.body;
        const { id } = request.params;

        const produtoUpdated = await updatePrecoProdutoUseCase.execute({ preco, id });

        return response.send();
    }
}

export { UpdatePrecoProdutoController };