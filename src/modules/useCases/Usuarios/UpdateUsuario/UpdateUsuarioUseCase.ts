import { IUsuariosRepository } from "../../../repositories/IUsuariosRepository";

interface IRequest {
    id: string;
    nome: string;
    username: string;
    password: string;
}

class UpdateUsuarioUseCase {
    constructor( private usuariosRepository: IUsuariosRepository) {}

    execute({nome, username, password, id}: IRequest): void {
        const usuario = this.usuariosRepository.findById(id);

        if(!usuario) {
            throw new Error("Usuario inválido");
        }

        const usernameIsUsed = this.usuariosRepository.findByUsername(username);

        if(usernameIsUsed) {
            throw new Error("Username já existe");
        }

        if(password.length < 5 || password.length > 15){
            throw new Error("Password deve ter entre 5 e 15 caracteres");
        }

        nome ? usuario.nome = nome : null;
        username ? usuario.username = username : null;
        password ? usuario.password = password : null;
    }
}

export { UpdateUsuarioUseCase };