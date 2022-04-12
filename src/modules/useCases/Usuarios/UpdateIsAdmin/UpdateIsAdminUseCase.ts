import { inject, injectable } from "tsyringe";
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
            throw new Error("Usuário não existe");
        }

        await this.usersRepository.updateIsAdmin({ id, isAdmin });
    }
}

export { IUpdateIsAdminDTO };