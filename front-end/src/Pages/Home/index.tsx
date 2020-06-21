import React, { useEffect, useState } from "react";
import { Business } from "@material-ui/icons";
import api from "../../services/api";
import Header from "../../components/Header";
import Browser from "../../components/Browser";
import { IListItem } from "../../components/Browser/types";
import { Company } from "./types";

const Home = () => {
  const [items, setItems] = useState<IListItem[]>([]);

  useEffect(() => {
    api.get("empresas").then((res) => {
      setItems(
        res.data.map((company: Company) => {
          return {
            id: company.id,
            primary: company.name,
            secondary: company.catchPhrase,
            link: `/empresas?name=${company.name}`,
          };
        })
      );
    });
  }, []);

  return (
    <Header title="Empresas" goBack={false}>
      <Browser Icon={Business} items={items} />
    </Header>
  );
};

export default Home;
