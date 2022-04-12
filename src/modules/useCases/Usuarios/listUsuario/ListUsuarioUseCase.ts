import { inject, injectable } from "tsyringe";
import { Usuario } from "../../../model/Usuario";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";
@injectable()
class ListUsuarioUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository) { }

    async execute(): Promise<Usuario[]> {
        const usuarios = await this.usuariosRepository.list();

        if (usuarios.length === 0) {
            throw new Error("Lista de usuários vazia");
        }

        return usuarios;
    }
}

export { ListUsuarioUseCase };