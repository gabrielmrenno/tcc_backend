import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListProdutoByGrupoUseCase } from "./ListProdutosByCategoriaUseCase";

class ListProdutoByGrupoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listProdutoByCategoriaUseCase = container.resolve(ListProdutoByGrupoUseCase);

        const { grupo } = req.params;

        const produtos = await listProdutoByCategoriaUseCase.execute(grupo);

        return res.json(produtos);
    }
}

export { ListProdutoByGrupoController };