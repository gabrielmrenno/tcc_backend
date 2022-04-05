import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";

class DeleteUsuarioUseCase {
    constructor( private usuariosRepository: IUsuariosRepository) {}

    execute(id: string): void {
        const usuario = this.usuariosRepository.findById(id);

        if(!usuario){
            throw new Error("Usuario não encontrado");
        }

        this.usuariosRepository.delete(usuario);
    }
}

export { DeleteUsuarioUseCase };