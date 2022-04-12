import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientsByIdUseCase } from "./ListClientsByIdUseCase";

export class ListClientsByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listClientsByIdUseCase = container.resolve(ListClientsByIdUseCase);

        const { id } = req.params;

        const client = await listClientsByIdUseCase.execute(id);

        return res.json(client);
    }
}