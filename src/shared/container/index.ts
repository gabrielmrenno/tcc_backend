import { container } from "tsyringe";

import { ProdutosRepository } from "../../modules/repositories/implementations/ProdutosRepository";
import { UsuariosRepository } from "../../modules/repositories/implementations/UsuariosRepository";
import { ClientesRepository } from "../../modules/repositories/implementations/ClientesRepository"
import { IClientesRepository } from "../../modules/repositories/IClientesRepository";
import { IProdutosRepository } from "../../modules/repositories/IProdutosRepository";
import { IUsuariosRepository } from "../../modules/repositories/IUsuariosRepository";

container.registerSingleton<IProdutosRepository>(
    "ProdutosRepository",
    ProdutosRepository
);

container.registerSingleton<IUsuariosRepository>(
    "UsuariosRepository",
    UsuariosRepository
);

container.registerSingleton<IClientesRepository>(
    "ClientesRepository",
    ClientesRepository
);