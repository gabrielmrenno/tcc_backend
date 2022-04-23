import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListProdutoByIdUseCase } from "./ListProdutoByIdUseCase";


class ListProdutoByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listProdutoByIdUseCase = container.resolve(ListProdutoByIdUseCase);

        const { id } = req.params;
        const produto = await listProdutoByIdUseCase.execute({ id });

        return res.json(produto);
    }

}

export { ListProdutoByIdController };