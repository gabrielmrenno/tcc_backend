import { Request, Response } from "express";
import { container } from "tsyringe";
import { IUpdateIsAdminDTO, UpdateIsAdminUseCase } from "./UpdateIsAdminUseCase";

export class UpdateIsAdminController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateIsAdminUseCase = container.resolve(UpdateIsAdminUseCase);

        const { id } = req.params;
        const { isAdmin } = req.body;

        await updateIsAdminUseCase.execute({ id, isAdmin });

        return res.status(201).send();
    }
}