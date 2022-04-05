import { Request, Response } from "express";
import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";


class UpdateUsuarioController {
    constructor(private updateUsuarioUseCase: UpdateUsuarioUseCase) { }

    handle(req: Request, res: Response): Response {
        try{
            const { id } = req.params;
            const { nome, username, password } = req.body;

            this.updateUsuarioUseCase.execute({ nome, username, password, id})

            return res.status(201).send();
        } catch(err){
            return res.status(404).json({ error: err.message });
        }
    }
}

export { UpdateUsuarioController };