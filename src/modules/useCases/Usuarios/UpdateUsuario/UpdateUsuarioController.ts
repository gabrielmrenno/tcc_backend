import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";


class UpdateUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { nome, username, password } = req.body;

            const updateUsuarioUseCase = container.resolve(UpdateUsuarioUseCase)

            await updateUsuarioUseCase.execute({ nome, username, password, id })

            return res.status(201).send();
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

export { UpdateUsuarioController };