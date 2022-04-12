import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class DeleteClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const deleteClientUseCase = container.resolve(DeleteClientUseCase)

        const { id } = req.params;

        await deleteClientUseCase.execute(id);

        return res.status(204).send();
    }
}