import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";


class DeleteUsuarioController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;

            const deleteUsuarioUseCase = container.resolve(DeleteUsuarioUseCase);

            await deleteUsuarioUseCase.execute(id)

            return res.send();
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

export { DeleteUsuarioController };