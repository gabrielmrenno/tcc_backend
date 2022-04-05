import { Request, Response } from "express";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";


class DeleteUsuarioController {
    constructor(private deleteUsuarioUseCase: DeleteUsuarioUseCase) { }

    handle(req: Request, res: Response): Response {
        try{
            const { id } = req.params;

            this.deleteUsuarioUseCase.execute(id)

            return res.send();
        } catch(err){
            return res.status(404).json({ error: err.message });
        }
    }
}

export { DeleteUsuarioController };