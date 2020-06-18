import express from "express";

const routes = express.Router();

import CompaniesController from "./controllers/CompaniesController";
import UsersController from "./controllers/UsersController";

const companiesController = new CompaniesController();
const usersController = new UsersController();

routes.get("/empresas", async (req, res) => {
  res.json(await companiesController.companies());
});
routes.get("/usuarios", (req, res) => companiesController.users(req, res));
routes.get("/posts", usersController.posts);

export default routes;
