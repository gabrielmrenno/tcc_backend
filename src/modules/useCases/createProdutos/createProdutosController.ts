import { Request, Response } from "express";

class createProdutosController {
    handle(req: Request, res: Response): Response {
        return res.send();
    }
}

export { createProdutosController };