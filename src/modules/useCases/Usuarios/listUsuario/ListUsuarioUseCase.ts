import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
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
            throw new AppError("Lista de usuários vazia", 404);
        }

        return usuarios;
    }
}

export { ListUsuarioUseCase };