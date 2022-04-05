import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProdutoUseCase } from "./ListProdutoUseCase";

class ListProdutoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listProdutoUseCase = container.resolve(ListProdutoUseCase);
        try {
            const produtos = await listProdutoUseCase.execute();

            return res.json(produtos);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export { ListProdutoController };