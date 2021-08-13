import React from "react";
import { LoginTemplate } from "../../components/templates";
import Container from "../container/Container";

interface LoginContainerProps {
  navigation?: any;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ navigation }) => {
  return (
    <Container>
      <LoginTemplate navigation={navigation} />
    </Container>
  );
};
export default LoginContainer;
