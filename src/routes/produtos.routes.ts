import { Router } from "express";

import { CreateProdutoController } from "../modules/useCases/Produtos/createProdutos/CreateProdutoController"
import { DeleteProdutoController } from "../modules/useCases/Produtos/deleteProduto/DeleteProdutoController";
import { ListProdutoByIdController } from "../modules/useCases/Produtos/listProdutoById/ListProdutoByIdController";
import { ListProdutoController } from "../modules/useCases/Produtos/listProdutos/ListProdutoController";
import { ListProdutoByGrupoController } from "../modules/useCases/Produtos/listProdutosByCategoria/ListProdutoByCategoriaController"
import { UpdatePrecoProdutoController } from "../modules/useCases/Produtos/updatePrecoProduto/UpdatePrecoProdutoController";
import { UpdateProdutoController } from "../modules/useCases/Produtos/updateProduto/UpdateProdutoController";

const createProdutoController = new CreateProdutoController();
const deleteProdutoController = new DeleteProdutoController();
const listProdutoByIdController = new ListProdutoByIdController();
const listProdutoController = new ListProdutoController();
const listProdutoByGrupoController = new ListProdutoByGrupoController();
const updatePrecoProdutoController = new UpdatePrecoProdutoController();
const updateProdutoController = new UpdateProdutoController();

const produtosRoutes = Router();

produtosRoutes.post("/", createProdutoController.handle);

produtosRoutes.get("/", listProdutoController.handle)

produtosRoutes.get("/grupo/:grupo", listProdutoByGrupoController.handle)

produtosRoutes.get("/id/:id", listProdutoByIdController.handle)

produtosRoutes.patch("/id/:id", updatePrecoProdutoController.handle)

produtosRoutes.put("/id/:id", updateProdutoController.handle)

produtosRoutes.delete("/id/:id", deleteProdutoController.handle)

export { produtosRoutes };