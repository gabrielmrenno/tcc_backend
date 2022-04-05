import { UsuariosRepository } from "../../../repositories/implementations/UsuariosRepository";
import { UpdateUsuarioController } from "./UpdateUsuarioController";
import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";

const usuariosRepository = UsuariosRepository.getInstance();

const updateUsuarioUseCase = new UpdateUsuarioUseCase(usuariosRepository);

const updateUsuarioController = new UpdateUsuarioController(updateUsuarioUseCase);

export { updateUsuarioController };