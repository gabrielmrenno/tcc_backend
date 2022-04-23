import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateUsuarioController } from "../modules/useCases/Usuarios/createUsuario/CreateUsuarioController";
import { DeleteUsuarioController } from "../modules/useCases/Usuarios/deleteUsuario/DeleteUsuarioController";
import { ListUsuarioController } from "../modules/useCases/Usuarios/listUsuario/ListUsuarioController";
import { ListUsuarioByIdController } from "../modules/useCases/Usuarios/listUsuarioById/ListUsuarioByIdController";
import { UpdateIsAdminController } from "../modules/useCases/Usuarios/UpdateIsAdmin/UpdateIsAdminController";
import { UpdatePosicaoUsuarioController } from "../modules/useCases/Usuarios/UpdatePosicaoUsuario/UpdatePosicaoUsuarioController";
import { UpdateUsuarioController } from "../modules/useCases/Usuarios/UpdateUsuario/UpdateUsuarioController";

const usuariosRoutes = Router();

const createUsuarioController = new CreateUsuarioController();
const deleteUsuarioController = new DeleteUsuarioController();
const listUsuarioController = new ListUsuarioController();
const listUsuarioByIdController = new ListUsuarioByIdController();
const updateUsuarioController = new UpdateUsuarioController();
const updatePosicaoUsuarioController = new UpdatePosicaoUsuarioController();
const updateIsAdminUsuarioController = new UpdateIsAdminController();

usuariosRoutes.use(ensureAuthenticated);

usuariosRoutes.post("/", createUsuarioController.handle)

usuariosRoutes.get("/", listUsuarioController.handle)

usuariosRoutes.get("/:id", listUsuarioByIdController.handle)

usuariosRoutes.put("/:id", updateUsuarioController.handle)

usuariosRoutes.patch("/:id", updatePosicaoUsuarioController.handle)

usuariosRoutes.patch("/isAdmin/:id", updateIsAdminUsuarioController.handle);

usuariosRoutes.delete("/:id", deleteUsuarioController.handle)

export { usuariosRoutes };