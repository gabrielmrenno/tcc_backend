import { inject, injectable } from "tsyringe";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

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

    async execute({ nome, username, password, posicao }: IRequest): Promise<void> {

        if (password.length < 5 || password.length > 15) {
            throw new AppError("Password deve ter entre 5 e 15 caracteres");
        }

        const usuario = await this.usuariosRepository.findByUsername(username);

        if (usuario) {
            throw new AppError("Username já está sendo usado");
        }

        // hashing password
        const passwordHash = await hash(password, 10);

        await this.usuariosRepository.create({ nome, username, password: passwordHash, posicao });
    }
}

export { CreateUsuarioUseCase };