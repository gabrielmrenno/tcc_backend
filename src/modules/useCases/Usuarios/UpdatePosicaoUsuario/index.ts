import { UsuariosRepository } from "../../../repositories/implementations/UsuariosRepository";
import { UpdatePosicaoUsuarioController } from "./UpdatePosicaoUsuarioController";
import { UpdatePosicaoUsuarioUseCase } from "./UpdatePosicaoUsuarioUseCase";

const usuariosRepository = UsuariosRepository.getInstance();

const updatePosicaoUsuarioUseCase = new UpdatePosicaoUsuarioUseCase(usuariosRepository);

const updatePosicaoUsuarioController = new UpdatePosicaoUsuarioController(updatePosicaoUsuarioUseCase);

export { updatePosicaoUsuarioController };