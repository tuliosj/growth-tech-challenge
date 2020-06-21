import React, { useEffect, useState } from "react";
import { Person, Business, Description } from "@material-ui/icons";
import api from "../../services/api";
import Header from "../../components/Header";
import Browser from "../../components/Browser";
import { IListItem } from "../../components/Browser/types";
import { Company } from "./types";
import { RouteComponentProps } from "react-router-dom";

const Home = (props: RouteComponentProps) => {
  const [items, setItems] = useState<IListItem[]>([]);

  useEffect(() => {
    api.get("empresas").then((res) => {
      setItems(
        res.data.map((company: Company) => {
          return {
            id: company.id,
            primary: company.name,
            secondary: company.catchPhrase,
            link: `/empresas?id=${company.id}`,
          };
        })
      );
    });
  }, []);

  return (
    <Header title="Empresas">
      <Browser Icon={Business} items={items} />
    </Header>
  );
};

export default Home;
