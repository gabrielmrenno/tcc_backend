import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsuarioUseCase } from "./ListUsuarioUseCase";


class ListUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listUsuarioUseCase = container.resolve(ListUsuarioUseCase)

        const usuarios = await listUsuarioUseCase.execute();

        return res.json(usuarios);
    }
}

export { ListUsuarioController };