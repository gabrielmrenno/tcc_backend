import { UsuariosRepository } from "../../../repositories/implementations/UsuariosRepository";
import { DeleteUsuarioController } from "./DeleteUsuarioController";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";

const usuariosRepository = UsuariosRepository.getInstance();

const deleteUsuarioUseCase = new DeleteUsuarioUseCase(usuariosRepository);

const deleteUsuarioController = new DeleteUsuarioController(deleteUsuarioUseCase);

export { deleteUsuarioController };