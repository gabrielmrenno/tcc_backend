import { inject, injectable } from "tsyringe";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";

interface IRequest {
    nome: string;
    username: string;
    password: string;
    posicao: string;
}

@injectable()
class CreateUsuarioUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository) { }

    async execute({ nome, username, password, posicao }: IRequest): void {

        if (password.length < 5 || password.length > 15) {
            throw new Error("Password deve ter entre 5 e 15 caracteres");
        }

        const usuario = await this.usuariosRepository.findByUsername(username);

        if (usuario) {
            throw new Error("Username já está sendo usado");
        }
        await this.usuariosRepository.create({ nome, username, password, posicao });
    }
}

export { CreateUsuarioUseCase };