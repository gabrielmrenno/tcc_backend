import express from "express";
import "reflect-metadata"


import { produtosRoutes } from "./produtos.routes";
import { usuariosRoutes } from "./usuarios.routes";
import { clientsRoutes } from "./clients.routes";
import { authenticateRoutes } from "./authenticate.routes";

const app = express();

app.use(express.json());

app.use("/produtos", produtosRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/clients", clientsRoutes);
app.use("/login", authenticateRoutes);

export { app };