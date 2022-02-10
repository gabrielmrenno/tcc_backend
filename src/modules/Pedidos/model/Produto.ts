import { v4 as uuidV4 } from 'uuid'

class Produto {
    idProduto?: string;
    nome: string;
    grupo: string;
    unidade: string;
    preço: number;
    peso: number;

    constructor(){
        if(!this.idProduto){
            this.idProduto = uuidV4();
        }
    }
}

export { Produto };