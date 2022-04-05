import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";

class CreateProdutoController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const createProdutoUseCase = container.resolve(CreateProdutoUseCase);

            const { nome, grupo, unidade, preco, peso } = req.body;

            await createProdutoUseCase.execute({ nome, grupo, unidade, preco, peso });

            return res.status(201).send();
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export { CreateProdutoController };