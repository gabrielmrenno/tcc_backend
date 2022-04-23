import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";


class UpdateUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { nome, username, password } = req.body;

        const updateUsuarioUseCase = container.resolve(UpdateUsuarioUseCase)

        await updateUsuarioUseCase.execute({ nome, username, password, id })

        return res.status(201).send();
    }
}

export { UpdateUsuarioController };