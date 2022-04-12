import { Router } from "express";

import { CreateNewClientController } from "../modules/useCases/Clients/CreateNewClient/CreateNewClientController";
import { DeleteClientController } from "../modules/useCases/Clients/DeleteClient/DeleteClientController";
import { ListAllClientsController } from "../modules/useCases/Clients/ListAllClients/ListAllClientsController";
import { ListClientsByIdController } from "../modules/useCases/Clients/ListClientsById/ListClientsByIdController";
import { UpdateClientController } from "../modules/useCases/Clients/UpdateClient/UpdateClientController";
import { UpdateDescontoClientController } from "../modules/useCases/Clients/UpdateDescontoClient/UpdateDescontoClientController";

const createNewClientController = new CreateNewClientController();
const listAllClientsController = new ListAllClientsController();
const listClientsByIdController = new ListClientsByIdController();
const updateClientController = new UpdateClientController();
const updateDescontoClientController = new UpdateDescontoClientController();
const deleteClientController = new DeleteClientController();

const clientsRoutes = Router();

clientsRoutes.get("/", listAllClientsController.handle);

clientsRoutes.get("/:id", listClientsByIdController.handle);

clientsRoutes.post("/", createNewClientController.handle);

clientsRoutes.put("/:id", updateClientController.handle);

clientsRoutes.patch("/:id", updateDescontoClientController.handle);

clientsRoutes.delete("/:id", deleteClientController.handle);

export { clientsRoutes };