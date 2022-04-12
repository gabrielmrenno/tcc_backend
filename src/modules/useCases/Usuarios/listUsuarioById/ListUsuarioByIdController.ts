import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsuarioByIdUseCase } from "./ListUsuarioByIdUseCase";


class ListUsuarioByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;

            const listUsuarioByIdUseCase = container.resolve(ListUsuarioByIdUseCase)

            const usuario = await listUsuarioByIdUseCase.execute({ id });

            return res.status(200).json(usuario);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

export { ListUsuarioByIdController };