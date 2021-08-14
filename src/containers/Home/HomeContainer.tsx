import React from "react";
import { HomeTemplate } from "../../components/templates";
import Container from "../container/Container";
import SafeAreaViewContainer from "../container/SafeAreaViewContainer";

interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = ({}) => {
  return (
    <SafeAreaViewContainer>
      <Container>
        <HomeTemplate />
      </Container>
    </SafeAreaViewContainer>
  );
};
export default HomeContainer;
