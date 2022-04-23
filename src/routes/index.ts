
import { Router } from "express";


import { produtosRoutes } from "./produtos.routes";
import { usuariosRoutes } from "./usuarios.routes";
import { clientsRoutes } from "./clients.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/produtos", produtosRoutes);
router.use("/usuarios", usuariosRoutes);
router.use("/clients", clientsRoutes);
router.use("/login", authenticateRoutes);

export { router };