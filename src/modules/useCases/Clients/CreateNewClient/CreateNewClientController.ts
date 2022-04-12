import { ICreateClienteDTO } from "../../../repositories/IClientesRepository";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNewClientUseCase } from "./CreateNewClientUseCase";


class CreateNewClientController {
    async handle(req: Request, res: Response): Promise<void> {
        const { nome, nomeFantasia, tipoCliente, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato, cnpj, desconto } = req.body;

        const createNewClientUseCase = container.resolve(CreateNewClientUseCase);

        await createNewClientUseCase.execute({ nome, nomeFantasia, tipoCliente, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato, cnpj, desconto });

        res.status(201).send();
    }
}

export { CreateNewClientController }