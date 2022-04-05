import { Request, Response } from "express";
import { ListUsuarioUseCase } from "./ListUsuarioUseCase";


class ListUsuarioController {
    constructor(private listUsuarioUseCase: ListUsuarioUseCase) { }

    handle(req: Request, res: Response): Response {
        try{
            const usuarios = this.listUsuarioUseCase.execute();

            return res.json(usuarios);
        } catch(err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

export { ListUsuarioController };