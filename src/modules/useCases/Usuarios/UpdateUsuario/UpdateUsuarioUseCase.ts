import { inject, injectable } from "tsyringe";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";

interface IRequest {
    id: string;
    nome: string;
    username: string;
    password: string;
}

@injectable()
class UpdateUsuarioUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository) { }

    async execute({ nome, username, password, id }: IRequest): Promise<void> {
        const usuario = await this.usuariosRepository.findById(id);

        if (!usuario) {
            throw new Error("Usuario inválido");
        }

        const usernameIsUsed = await this.usuariosRepository.findByUsername(username);

        if (usernameIsUsed) {
            throw new Error("Username já existe");
        }

        if (password.length < 5 || password.length > 15) {
            throw new Error("Password deve ter entre 5 e 15 caracteres");
        }

        await this.usuariosRepository.update({ nome, username, password, id });
    }
}

export { UpdateUsuarioUseCase };