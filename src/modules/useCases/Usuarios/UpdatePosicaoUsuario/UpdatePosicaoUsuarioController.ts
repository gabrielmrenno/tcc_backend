import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePosicaoUsuarioUseCase } from "./UpdatePosicaoUsuarioUseCase";


class UpdatePosicaoUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { posicao } = req.body;

            const updatePosicaoUsuarioUseCase = container.resolve(UpdatePosicaoUsuarioUseCase)

            await updatePosicaoUsuarioUseCase.execute({ id, posicao });

            return res.status(201).send();
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

export { UpdatePosicaoUsuarioController };