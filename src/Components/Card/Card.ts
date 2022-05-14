import styled from "styled-components";
import { Box } from "../UI/Box";

export const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: black;
  font-weight: bold;
  flex-basis: 270px;
  margin: 50px 30px;
  animation: show 1s ease;

  @keyframes show {
     0% {opacity: 0};
     100% {opacity: 1};
  }
`