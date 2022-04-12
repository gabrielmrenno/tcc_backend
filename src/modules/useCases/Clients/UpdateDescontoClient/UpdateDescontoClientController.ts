import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateDescontoClientUseCase } from "./UpdateDescontoClientUseCase";

export class UpdateDescontoClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateDescontoClientUseCase = container.resolve(UpdateDescontoClientUseCase)

        const { id } = req.params;
        const { desconto } = req.body;

        await updateDescontoClientUseCase.execute({ id, desconto });

        return res.status(200).send();
    }
}