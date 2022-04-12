import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllClientsUseCase } from "./ListAllClientsUseCase";

class ListAllClientsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listAllClientsUseCase = container.resolve(ListAllClientsUseCase)

        const allClients = await listAllClientsUseCase.execute();

        return res.json(allClients);
    }
}

export { ListAllClientsController };