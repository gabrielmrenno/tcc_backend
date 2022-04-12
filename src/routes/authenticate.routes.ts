import { Router } from "express";
import { AuthenticateUserController } from "../modules/useCases/Usuarios/AuthenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };