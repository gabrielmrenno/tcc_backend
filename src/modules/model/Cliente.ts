import { v4 as uuidV4 } from "uuid";

class Cliente {
    idCliente?: string;
    nome: string;
    nomeFantasia: string;
    tipoCliente: string;
    endereco: string;
    bairro: string;
    cidade: string;
    cep: string;
    telefone: string;
    email: string;
    nomeContato?: string;
    telefoneContato?: string;
    cnpj: string;
    desconto: number;
}

export { Cliente };