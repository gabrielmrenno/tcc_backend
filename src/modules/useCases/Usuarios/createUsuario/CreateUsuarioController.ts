import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";


class CreateUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { nome, username, password, posicao } = req.body;

        const createUsuarioUseCase = container.resolve(CreateUsuarioUseCase)

        await createUsuarioUseCase.execute({ nome, username, password, posicao });

        return res.status(201).send();
    }
}

export { CreateUsuarioController };