import { Usuario } from "../../../model/Usuario";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";

class ListUsuarioUseCase {
    constructor( private usuariosRepository: IUsuariosRepository) {}

    execute(): Usuario[] {
        const usuarios = this.usuariosRepository.list();

        if(usuarios.length === 0) {
            throw new Error("Lista de usuários vazia");
        }

        return usuarios;
    }
}

export { ListUsuarioUseCase };