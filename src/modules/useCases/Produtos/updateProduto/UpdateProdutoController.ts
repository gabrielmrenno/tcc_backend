import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProdutoUseCase } from "./UpdateProdutoUseCase";


class UpdateProdutoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateProdutoUseCase = container.resolve(UpdateProdutoUseCase);
        const { nome, grupo, unidade, preco, peso } = req.body;
        const { id } = req.params;

        await updateProdutoUseCase.execute({ nome, grupo, unidade, preco, peso, id });

        return res.status(200).send();
    }
}

export { UpdateProdutoController };