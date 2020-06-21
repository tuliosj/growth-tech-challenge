import { Typography } from "@material-ui/core";
import styled from "styled-components";
import background from "../../assets/bg-header-desktop.svg";

export const TitleBox = styled.div`
  display: flex;
  padding: 5% 0 0.5rem 10%;
  align-items: baseline;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Title = styled(Typography)`
  margin-left: 1rem;
  font-size: 2rem;
`;

export const Container = styled.div`
  margin: 0 10%;
  border-radius: 6px;
`;
