import { UsuariosRepository } from "../../../repositories/implementations/UsuariosRepository";
import { ListUsuarioController } from "./ListUsuarioController";
import { ListUsuarioUseCase } from "./ListUsuarioUseCase";

const usuariosRepository = UsuariosRepository.getInstance();

const listUsuarioUseCase = new ListUsuarioUseCase(usuariosRepository);

const listUsuarioController = new ListUsuarioController(listUsuarioUseCase);

export { listUsuarioController };