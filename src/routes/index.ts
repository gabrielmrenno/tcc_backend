import express from "express";
import "reflect-metadata"


import { produtosRoutes } from "./produtos.routes";
import { usuariosRoutes } from "./usuarios.routes";

const app = express();

app.use(express.json());

app.use("/produtos", produtosRoutes);
app.use("/usuarios", usuariosRoutes);

export { app };