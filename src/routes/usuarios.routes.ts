import { Router } from "express";
import { CreateUsuarioController } from "../modules/useCases/Usuarios/createUsuario/CreateUsuarioController";
import { deleteUsuarioController } from "../modules/useCases/Usuarios/deleteUsuario";
import { listUsuarioController } from "../modules/useCases/Usuarios/listUsuario";
import { listUsuarioByIdController } from "../modules/useCases/Usuarios/listUsuarioById";
import { updatePosicaoUsuarioController } from "../modules/useCases/Usuarios/UpdatePosicaoUsuario";
import { updateUsuarioController } from "../modules/useCases/Usuarios/UpdateUsuario";

const usuariosRoutes = Router();

const createUsuarioController = new CreateUsuarioController();

usuariosRoutes.post("/", createUsuarioController.handle)

usuariosRoutes.get("/", (req, res) => {
    return listUsuarioController.handle(req, res);
})

usuariosRoutes.get("/:id", (req, res) => {
    return listUsuarioByIdController.handle(req, res);
})

usuariosRoutes.put("/:id", (req, res) => {
    return updateUsuarioController.handle(req, res);
})

usuariosRoutes.patch("/:id", (req, res) => {
    return updatePosicaoUsuarioController.handle(req, res);
})

usuariosRoutes.delete("/:id", (req, res) => {
    return deleteUsuarioController.handle(req, res);
})

export { usuariosRoutes };