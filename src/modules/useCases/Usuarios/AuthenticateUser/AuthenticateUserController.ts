import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const authenticateUser = container.resolve(AuthenticateUserUseCase)

        const { username, password } = req.body;

        const { token } = await authenticateUser.execute({ username, password });

        return res.json(token);
    }
}