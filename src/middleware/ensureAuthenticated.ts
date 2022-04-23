import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsuariosRepository } from "../modules/repositories/implementations/UsuariosRepository";

interface IPayload {
    sub: string;
}

async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Por favor, efetuar login!", 401);
    }

    // Bearer token form: “Bearer ndajshashdgasda6s8d (token)
    const [, token] = authHeader.split(" ");

    try {
        // sub (data returned of verify method) is the user id
        const { sub: user_id } = verify(token, "6eca0684d1eb448ad01197c5c9cc8b92") as IPayload;

        //to verify if the user exisits in database:
        const usersRepository = new UsuariosRepository();

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("Usuário não existe", 401);
        }

        // Need to overwrite the Request information in @types/express
        req.user = {
            id: user_id,
        }

        next();
    } catch (err) {
        throw new AppError("Usuário não autenticado", 401);
    }
}

export { ensureAuthenticated };