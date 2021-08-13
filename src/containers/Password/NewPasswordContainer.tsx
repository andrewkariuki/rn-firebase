import React from "react";
import { NewPasswordTemplate } from "../../components/templates";
import Container from "../container/Container";

interface NewPasswordContainerProps {}

const NewPasswordContainer: React.FC<NewPasswordContainerProps> = ({}) => {
  return (
    <Container>
      <NewPasswordTemplate />
    </Container>
  );
};
export default NewPasswordContainer;
