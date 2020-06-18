import { Request, Response } from "express";
import fetch from "node-fetch";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Company {
  id: number;
  name: string;
  catchPhrase: string;
  bs: string;
}

class CompaniesController {
  async companies() {
    // Startando array de empresas
    var companies = Array<Company>();

    const data = await fetch(`${process.env.API_URL}/users`);

    await data.json().then((users) => {
      users.map((user: User) => {
        companies.push({ id: companies.length + 1, ...user.company });
      });
    });

    return companies;
  }

  async users(req: Request, res: Response) {
    const companies = await this.companies();

    // Startando array de funcionários
    var employees = Array<User>();

    const data = await fetch(`${process.env.API_URL}/users`);

    // Mesmo esquema para chamar os usuários, porém iremos verificar se é da mesma empresa.
    await data.json().then((users) => {
      users.map((user: User) => {
        if (user.company.name === req.query.empresa) {
          employees.push(user);
        }
      });
    });

    res.json(employees);
  }
}

export default CompaniesController;
