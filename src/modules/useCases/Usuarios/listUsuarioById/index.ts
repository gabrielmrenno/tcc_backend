import { UsuariosRepository } from "../../../repositories/implementations/UsuariosRepository";
import { ListUsuarioByIdController } from "./ListUsuarioByIdController";
import { ListUsuarioByIdUseCase } from "./ListUsuarioByIdUseCase";

const usuariosRepository = UsuariosRepository.getInstance();

const listUsuarioByIdUseCase = new ListUsuarioByIdUseCase(usuariosRepository);

const listUsuarioByIdController = new ListUsuarioByIdController(listUsuarioByIdUseCase);

export { listUsuarioByIdController };