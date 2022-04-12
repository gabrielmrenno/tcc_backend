import { prisma } from "../../../database/prismaClient";
import { Usuario } from "../../model/Usuario";
import { IUpdateIsAdminDTO } from "../../useCases/Usuarios/UpdateIsAdmin/UpdateIsAdminUseCase";
import { ICreateUsuarioDTO, IUsuariosRepository, IUpdateUsuarioDTO, IUpdatePosicaoUsuarioDTO } from "../IUsuariosRepository";


class UsuariosRepository implements IUsuariosRepository {
    async create({ nome, username, password, posicao }: ICreateUsuarioDTO): Promise<void> {
        await prisma.usuarios.create({
            data: { nome, username, password, posicao }
        });
    }
    async findByUsername(username: string): Promise<Usuario> {
        const usuario = await prisma.usuarios.findFirst({
            where: { username: username },
        })

        return usuario;
    }

    async findById(id: string): Promise<Usuario> {
        const usuario = await prisma.usuarios.findFirst({
            where: { id: id }
        })

        return usuario;
    }
    async list(): Promise<Usuario[]> {
        return await prisma.usuarios.findMany()
    }

    async update({ nome, username, password, id }: IUpdateUsuarioDTO): Promise<void> {
        await prisma.usuarios.update({
            where: {
                id: id,
            },
            data: {
                nome: nome,
                username: username,
                password: password,
            }
        })
    }

    async updatePosicao({ posicao, id }: IUpdatePosicaoUsuarioDTO): Promise<void> {
        await prisma.usuarios.update({
            where: {
                id: id,
            },
            data: {
                posicao: posicao,
            }
        })
    }

    async updateIsAdmin({ id, isAdmin }: IUpdateIsAdminDTO): Promise<void> {
        await prisma.usuarios.update({
            where: { id: id },
            data: { isAdmin }
        })
    }

    async delete(id: string): Promise<void> {
        await prisma.usuarios.delete({
            where: { id: id },
        })
    }

}

export { UsuariosRepository };