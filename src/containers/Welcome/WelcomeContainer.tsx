import React from "react";
import { WelcomeTemplate } from "../../components";
import Container from "../container/Container";

interface WelcomeContainerProps {}

const WelcomeContainer: React.FC<WelcomeContainerProps> = ({}) => {
  return (
    <Container>
      <WelcomeTemplate />
    </Container>
  );
};
export default WelcomeContainer;
