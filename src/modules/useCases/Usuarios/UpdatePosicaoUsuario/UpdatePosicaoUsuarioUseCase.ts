import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";

interface IRequest {
    id: string;
    posição: string;
    isAdmin?: boolean;
}

class UpdatePosicaoUsuarioUseCase {
    constructor(private usuariosRepository: IUsuariosRepository) { }

    execute({ id, posição, isAdmin }: IRequest): void {
        const usuario = this.usuariosRepository.findById(id);

        if (!usuario) {
            throw new Error("Usuario não encontrado");
        }

        usuario.posição = posição;
        isAdmin ? usuario.isAdmin = isAdmin : null;
    }
}

export { UpdatePosicaoUsuarioUseCase };