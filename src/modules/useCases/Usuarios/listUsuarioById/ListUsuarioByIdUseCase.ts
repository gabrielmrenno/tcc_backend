import { Usuario } from "../../../model/Usuario";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";

interface IRequest {
    id: string;
}

class ListUsuarioByIdUseCase {
    constructor( private usuariosRepository: IUsuariosRepository) {}

    execute({ id }: IRequest): Usuario {
        const usuario = this.usuariosRepository.findById(id);

        if(!usuario) {
            throw new Error("Usuario não econtrado");
        }

        return usuario;
    }
}

export { ListUsuarioByIdUseCase };