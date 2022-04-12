import { inject, injectable } from "tsyringe";
import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";

interface IRequest {
    id: string;
    posicao: string;
}

@injectable()
class UpdatePosicaoUsuarioUseCase {
    constructor(
        @inject("UsuariosRepository")
        private usuariosRepository: IUsuariosRepository) { }

    async execute({ id, posicao }: IRequest): Promise<void> {
        const usuario = await this.usuariosRepository.findById(id);

        if (!usuario) {
            throw new Error("Usuario não encontrado");
        }

        await this.usuariosRepository.updatePosicao({ posicao, id });
    }
}

export { UpdatePosicaoUsuarioUseCase };