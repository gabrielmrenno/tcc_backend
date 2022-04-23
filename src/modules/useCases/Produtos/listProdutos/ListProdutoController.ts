import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProdutoUseCase } from "./ListProdutoUseCase";

class ListProdutoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listProdutoUseCase = container.resolve(ListProdutoUseCase);
        const produtos = await listProdutoUseCase.execute();

        return res.json(produtos);
    }
}

export { ListProdutoController };