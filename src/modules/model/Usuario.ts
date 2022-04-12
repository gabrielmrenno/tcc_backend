import { v4 as uuidV4 } from "uuid";

class Usuario {
    idUsuario: string;
    nome: string;
    username: string;
    password: string;
    posicao: string;
    isAdmin: boolean;
}

export { Usuario };