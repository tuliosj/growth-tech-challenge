import React, { useEffect, useState } from "react";
import { Person } from "@material-ui/icons";
import api from "../../services/api";
import Header from "../../components/Header";
import Browser from "../../components/Browser";
import { IListItem } from "../../components/Browser/types";
import { User } from "./types";
import { RouteComponentProps } from "react-router-dom";

const Employees = (props: RouteComponentProps) => {
  const params = new URLSearchParams(props.location.search);
  const [items, setItems] = useState<IListItem[]>([]);

  useEffect(() => {
    api.get(`usuarios?empresa=${params.get("name")}`).then((res) => {
      setItems(
        res.data.map((user: User) => {
          return {
            id: user.id,
            primary: user.name,
            secondary: user.email,
            link: `/posts?id=${user.id}`,
          };
        })
      );
    });
  }, [params]);

  return (
    <Header title="Funcionários">
      <Browser Icon={Person} items={items} />
    </Header>
  );
};

export default Employees;
