import { Request, Response } from "express";
import { UpdatePosicaoUsuarioUseCase } from "./UpdatePosicaoUsuarioUseCase";


class UpdatePosicaoUsuarioController {
    constructor(private updatePosicaoUsuarioUseCase: UpdatePosicaoUsuarioUseCase) { }

    handle(req: Request, res: Response): Response {
        try {
            const { id } = req.params;
            const { posição, isAdmin } = req.body;

            this.updatePosicaoUsuarioUseCase.execute({ id, posição, isAdmin });

            return res.status(201).send();
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

export { UpdatePosicaoUsuarioController };