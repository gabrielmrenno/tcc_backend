import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteProdutoUseCase } from "./DeleteProdutoUseCase";


class DeleteProdutoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const deleteProdutoUseCase = container.resolve(DeleteProdutoUseCase);
        const { id } = req.params;

        await deleteProdutoUseCase.execute({ id });

        return res.status(204).send();
    }
}

export { DeleteProdutoController };