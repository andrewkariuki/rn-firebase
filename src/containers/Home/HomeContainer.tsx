import React from "react";
import { HomeTemplate } from "../../components/templates";
import Container from "../container/Container";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = ({}) => {
  return (
    <Container>
      <HomeTemplate />
    </Container>
  );
};
export default HomeContainer;
