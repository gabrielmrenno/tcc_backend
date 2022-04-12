import { inject, injectable } from "tsyringe";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";
@injectable()
class DeleteUsuarioUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository) { }

    async execute(id: string): Promise<void> {
        const usuario = await this.usuariosRepository.findById(id);

        if (!usuario) {
            throw new Error("Usuario não encontrado");
        }

        this.usuariosRepository.delete(id);
    }
}

export { DeleteUsuarioUseCase };