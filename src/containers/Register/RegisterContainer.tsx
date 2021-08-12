import React from "react";
import { RegisterTemplate } from "../../components/templates";
import Container from "../container/Container";

interface RegisterContainerProps {
  navigation?: any;
}

interface FormValues {
  email?: string;
  password?: string;
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
