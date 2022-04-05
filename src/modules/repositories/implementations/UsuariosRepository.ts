import { prisma } from "../../../database/prismaClient";
import { Usuario } from "../../model/Usuario";
import { ICreateUsuarioDTO, ILoginUsuarioDTO, IUsuariosRepository } from "../IUsuariosRepository";


class UsuariosRepository implements IUsuariosRepository {
    async create({ nome, username, password, posicao }: ICreateUsuarioDTO): Promise<void> {
        await prisma.usuarios.create({
            data: { nome, username, password, posicao }
        });
    }
    async findByUsername(username: string): Promise<Usuario> {
        const usuario = await prisma.usuarios.findFirst({
            where: { username: username }
        });

        return usuario;
    }
    findByLogin({ username, password }: ILoginUsuarioDTO): Usuario {
        const usuario = this.usuarios.find(usuario => (usuario.username === username) && (usuario.password === password))

        return usuario;
    }
    findById(id: string): Usuario {
        const usuario = this.usuarios.find(usuario => usuario.idUsuario === id);

        return usuario;
    }
    list(): Usuario[] {
        return this.usuarios;
    }

    delete(usuario: Usuario): void {
        const indexUsuario = this.usuarios.indexOf(usuario);
        this.usuarios.splice(indexUsuario, 1);
    }

}

export { UsuariosRepository };