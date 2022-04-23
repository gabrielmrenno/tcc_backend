import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePosicaoUsuarioUseCase } from "./UpdatePosicaoUsuarioUseCase";


class UpdatePosicaoUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { posicao } = req.body;

        const updatePosicaoUsuarioUseCase = container.resolve(UpdatePosicaoUsuarioUseCase)

        await updatePosicaoUsuarioUseCase.execute({ id, posicao });

        return res.status(201).send();
    }
}

export { UpdatePosicaoUsuarioController };