import { v4 as uuidV4} from "uuid";

class Usuario {
    idUsuario?: string;
    nome: string;
    username: string;
    password: string;
    posição: string;

    constructor(){
        if(!this.idUsuario){
            this.idUsuario = uuidV4();
        }
    }
}

export { Usuario };