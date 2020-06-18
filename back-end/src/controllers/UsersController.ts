import { Request, Response } from "express";
import fetch from "node-fetch";

class UsersController {
  async posts(req: Request, res: Response) {
    const data = await fetch(
      `${process.env.API_URL}/posts?userId=${req.query.usuario}`
    );

    res.json(await data.json());
  }
}

export default UsersController;
