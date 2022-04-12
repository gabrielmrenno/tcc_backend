import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsuarioUseCase } from "./ListUsuarioUseCase";


class ListUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const listUsuarioUseCase = container.resolve(ListUsuarioUseCase)

            const usuarios = await listUsuarioUseCase.execute();

            return res.json(usuarios);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

export { ListUsuarioController };