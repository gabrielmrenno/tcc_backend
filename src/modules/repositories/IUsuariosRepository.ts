import { Usuario } from "../model/Usuario";
import { IUpdateIsAdminDTO } from "../useCases/Usuarios/UpdateIsAdmin/UpdateIsAdminUseCase";


interface ICreateUsuarioDTO {
    nome: string;
    username: string;
    password: string;
    posicao: string;
}
interface IUpdateUsuarioDTO {
    nome: string;
    username: string;
    password: string;
    id: string;
}
interface IUpdatePosicaoUsuarioDTO {
    posicao: string;
    id: string;
}

interface IUsuariosRepository {
    create({ nome, username, password, posicao }: ICreateUsuarioDTO): Promise<void>;

    findByUsername(username: string): Promise<Usuario>;
    findById(id: string): Promise<Usuario>;

    list(): Promise<Usuario[]>;

    update({ nome, username, password, id }: IUpdateUsuarioDTO): Promise<void>;
    updatePosicao({ posicao, id }: IUpdatePosicaoUsuarioDTO): Promise<void>;
    updateIsAdmin({ id, isAdmin }: IUpdateIsAdminDTO): Promise<void>;

    delete(id: string): Promise<void>;
}

export { IUsuariosRepository, ICreateUsuarioDTO, IUpdateUsuarioDTO, IUpdatePosicaoUsuarioDTO };