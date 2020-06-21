import React, { useEffect, useState } from "react";
import { Description } from "@material-ui/icons";
import api from "../../services/api";
import Header from "../../components/Header";
import Browser from "../../components/Browser";
import { IListItem } from "../../components/Browser/types";
import { Post } from "./types";
import { RouteComponentProps } from "react-router-dom";

const Employees = (props: RouteComponentProps) => {
  const params = new URLSearchParams(props.location.search);
  const [items, setItems] = useState<IListItem[]>([]);

  useEffect(() => {
    api.get(`posts?usuario=${params.get("id")}`).then((res) => {
      setItems(
        res.data.map((post: Post) => {
          return {
            id: post.id,
            primary: post.title,
            secondary: post.body,
            link: "",
          };
        })
      );
    });
  }, [params]);

  return (
    <Header title="Publicações">
      <Browser Icon={Description} items={items} />
    </Header>
  );
};

export default Employees;
