import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateClientUseCase = container.resolve(UpdateClientUseCase)

        const { id } = req.params;
        const { nome, nomeFantasia, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato } = req.body;

        await updateClientUseCase.execute({ id, nome, nomeFantasia, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato });

        return res.status(200).send();
    }
}