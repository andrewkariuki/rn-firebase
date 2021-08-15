import React from "react";
import { HomeTemplate } from "../../components/templates";
import Container from "../container/Container";
import SafeAreaViewContainer from "../container/SafeAreaViewContainer";

interface HomeContainerProps {
  navigation?: any;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ navigation }) => {
  return (
    <SafeAreaViewContainer>
      <Container>
        <HomeTemplate navigation={navigation} />
      </Container>
    </SafeAreaViewContainer>
  );
};
export default HomeContainer;
