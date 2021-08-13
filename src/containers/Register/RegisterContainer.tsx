import React from "react";
import { RegisterTemplate } from "../../components/templates";
import Container from "../container/Container";

interface RegisterContainerProps {
  navigation?: any;
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({
  navigation,
}) => {
  return (
    <Container>
      <RegisterTemplate navigation={navigation} />
    </Container>
  );
};
export default RegisterContainer;
