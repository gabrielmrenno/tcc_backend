import { prisma } from "../../../database/prismaClient";
import { Cliente } from "../../model/Cliente";
import { IUpdateClient } from "../../useCases/Clients/UpdateClient/UpdateClientUseCase";
import { IUpdateDescontoClientDTO } from "../../useCases/Clients/UpdateDescontoClient/UpdateDescontoClientUseCase";
import { IClientesRepository, ICreateClienteDTO, IFindUniqueValuesDTO, } from "../IClientesRepository"

class ClientesRepository implements IClientesRepository {
    async create({ nome, nomeFantasia, tipoCliente, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato, cnpj, desconto }: ICreateClienteDTO): Promise<void> {
        await prisma.clientes.create({
            data: { nome, nomeFantasia, endereco, tipoCliente, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato, cnpj, desconto }
        })
    }
    async findById(id: string): Promise<Cliente> {
        const client = await prisma.clientes.findUnique({
            where: { id: id }
        })

        return client;
    }

    async findByUniqueValues({ nome, nomeFantasia, cnpj }: IFindUniqueValuesDTO): Promise<Cliente> {
        const client = await prisma.clientes.findFirst({
            where: {
                OR: [
                    { nome },
                    { nomeFantasia },
                    { cnpj },
                ]
            }
        })

        return client;
    }

    async listAll(): Promise<Cliente[]> {
        return await prisma.clientes.findMany();
    }

    async update({ id, nome, nomeFantasia, endereco, bairro, cidade, cep, telefone, email, nomeContato, telefoneContato }: IUpdateClient): Promise<void> {
        await prisma.clientes.update({
            where: { id: id },
            data: {
                nome,
                nomeFantasia,
                endereco,
                bairro,
                cidade,
                cep,
                telefone,
                email,
                nomeContato,
                telefoneContato
            }
        })
    }

    async updateDesconto({ id, desconto }: IUpdateDescontoClientDTO): Promise<void> {
        await prisma.clientes.update({
            where: { id: id },
            data: { desconto }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.clientes.delete({
            where: { id: id }
        })
    }
}

export { ClientesRepository }