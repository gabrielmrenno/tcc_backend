import { Request, Response } from "express";
import { ListUsuarioByIdUseCase } from "./ListUsuarioByIdUseCase";


class ListUsuarioByIdController {
    constructor(private listUsuarioByIdUseCase: ListUsuarioByIdUseCase) { }

    handle(req: Request, res: Response): Response {
        try {
            const { id } = req.params;

            const usuario = this.listUsuarioByIdUseCase.execute({id});

            return res.status(200).json(usuario);
        } catch (err){
            return res.status(404).json({ error: err.message });
        }
    }
}

export { ListUsuarioByIdController };