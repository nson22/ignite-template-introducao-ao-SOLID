import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id = request.header("user_id");
    console.log(user_id);

    try {
      const all = this.listAllUsersUseCase.execute({ user_id });
      return response.json(all);
    } catch (err) {
      return response.status(400).json({ error: err.toString() });
    }
  }
}

export { ListAllUsersController };
