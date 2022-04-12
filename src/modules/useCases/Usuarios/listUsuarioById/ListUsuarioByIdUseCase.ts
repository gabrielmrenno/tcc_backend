import { inject, injectable } from "tsyringe";
import { Usuario } from "../../../model/Usuario";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";

interface IRequest {
    id: string;
}

@injectable()
class ListUsuarioByIdUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository) { }

    async execute({ id }: IRequest): Promise<Usuario> {
        const usuario = await this.usuariosRepository.findById(id);

        if (!usuario) {
            throw new Error("Usuario não econtrado");
        }

        return usuario;
    }
}

export { ListUsuarioByIdUseCase };