import React from "react";
import { WelcomeTemplate } from "../../components";
import Container from "../container/Container";

interface WelcomeContainerProps {
  navigation?: any;
}

const WelcomeContainer: React.FC<WelcomeContainerProps> = ({ navigation }) => {
  return (
    <Container>
      <WelcomeTemplate navigation={navigation} />
    </Container>
  );
};
export default WelcomeContainer;
