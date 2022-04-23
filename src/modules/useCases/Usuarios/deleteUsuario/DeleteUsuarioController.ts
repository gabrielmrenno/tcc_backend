import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";


class DeleteUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleteUsuarioUseCase = container.resolve(DeleteUsuarioUseCase);

        await deleteUsuarioUseCase.execute(id)

        return res.send();
    }
}

export { DeleteUsuarioController };