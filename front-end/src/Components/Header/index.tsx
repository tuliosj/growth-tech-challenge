import React from "react";
import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { TitleBox, Title, Container } from "./styles";
import { IProps } from "./types";

const Header: React.FC<IProps> = (props: IProps) => {
  const history = useHistory();

  return (
    <>
      <TitleBox>
        <IconButton
          onClick={() => {
            history.goBack();
          }}
        >
          <ArrowBack />
        </IconButton>
        <Title variant="h1">{props.title}</Title>
      </TitleBox>
      <Container>{props.children}</Container>
    </>
  );
};

export default Header;
