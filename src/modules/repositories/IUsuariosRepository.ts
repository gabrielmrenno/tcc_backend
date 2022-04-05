import { Usuario } from "../model/Usuario";


interface ICreateUsuarioDTO {
    nome: string;
    username: string;
    password: string;
    posicao: string;
}

interface ILoginUsuarioDTO {
    nome: string;
    username: string;
    password: string;
}

interface IUsuariosRepository {
    create({ nome, username, password, posicao }: ICreateUsuarioDTO): Promise<void>;

    findByUsername(username: string): Promise<Usuario>;
    findByLogin({ username, password }: ILoginUsuarioDTO): Usuario;
    findById(id: string): Usuario;

    list(): Usuario[];

    delete(usuario: Usuario): void;
}

export { IUsuariosRepository, ILoginUsuarioDTO, ICreateUsuarioDTO };