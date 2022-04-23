import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { UsuariosRepository } from "../../../repositories/implementations/UsuariosRepository";

interface IUpdateIsAdminDTO {
    id: string;
    isAdmin: boolean;
}

@injectable()
export class UpdateIsAdminUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usersRepository: UsuariosRepository
    ) { }

    async execute({ id, isAdmin }: IUpdateIsAdminDTO): Promise<void> {
        const client = await this.usersRepository.findById(id);

        if (!client) {
            throw new AppError("Usuário não existe", 404);
        }

        await this.usersRepository.updateIsAdmin({ id, isAdmin });
    }
}

export { IUpdateIsAdminDTO };