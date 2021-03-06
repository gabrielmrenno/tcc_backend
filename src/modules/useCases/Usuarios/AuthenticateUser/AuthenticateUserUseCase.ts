import { inject, injectable } from "tsyringe";
import { UsuariosRepository } from "../../../repositories/implementations/UsuariosRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    username: string;
    password: string;
}

interface IReturn {
    username: string;
    token: string;
}

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usersRepository: UsuariosRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<IReturn> {
        const user = await this.usersRepository.findByUsername(username);

        if (!user) {
            throw new AppError("Username e/ou senha incorreta")
        }

        const passwordIsMatching = await compare(password, user.password);

        if (!passwordIsMatching) {
            throw new AppError("Username e/ou senha incorreta")
        }

        const id = String(user.id);

        const token = sign({ username }, "6eca0684d1eb448ad01197c5c9cc8b92",
            {
                subject: id,
                expiresIn: "1d",
            })

        const data: IReturn = {
            username, token
        }

        return data;
    }
}