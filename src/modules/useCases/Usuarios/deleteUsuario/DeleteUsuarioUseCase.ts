import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";
@injectable()
class DeleteUsuarioUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository) { }

    async execute(id: string): Promise<void> {
        const usuario = await this.usuariosRepository.findById(id);

        if (!usuario) {
            throw new AppError("Usuario não encontrado", 404);
        }

        this.usuariosRepository.delete(id);
    }
}

export { DeleteUsuarioUseCase };