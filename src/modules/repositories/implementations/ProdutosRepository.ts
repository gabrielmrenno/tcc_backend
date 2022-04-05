import { Produto } from "../../model/Produto";
import { ICreateProdutoDTO, IProdutosRepository, IUpdateProdutoDTO } from "../IProdutosRepository";
import { prisma } from "../../../database/prismaClient";


class ProdutosRepository implements IProdutosRepository {
    async create({ nome, grupo, unidade, preco, peso }: ICreateProdutoDTO): Promise<void> {
        await prisma.produtos.create({
            data: { nome, grupo, unidade, preco, peso }
        });
    }

    async findById(id: string): Promise<Produto> {
        return await prisma.produtos.findFirst({
            where: { id: id }
        })
    }

    async findByNome(nome: string): Promise<Produto> {
        return await prisma.produtos.findFirst({
            where: { nome: nome }
        })
    }

    async listByGroupo(grupo: string): Promise<Produto[]> {
        return await prisma.produtos.findMany({
            where: { grupo: grupo }
        })
    }

    async list(): Promise<Produto[]> {
        return await prisma.produtos.findMany();
    }

    async update({ nome, grupo, unidade, preco, peso, id }: IUpdateProdutoDTO): Promise<void> {
        await prisma.produtos.update({
            where: {
                id: id,
            },
            data: {
                nome: nome,
                grupo: grupo,
                unidade: unidade,
                preco: preco,
                peso: peso,
            }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.produtos.delete({
            where: {
                id: id
            }
        })
    }

}

export { ProdutosRepository };