import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Browser from "../../Components/Browser";
import { Person, Business, Description } from "@material-ui/icons";

import useStyles from "./styles";

const Home = () => {
  return (
    <Browser
      Icon={Person}
      items={[{ id: 1, primary: "a", secondary: "b", link: "c" }]}
    />
  );
};

export default Home;
