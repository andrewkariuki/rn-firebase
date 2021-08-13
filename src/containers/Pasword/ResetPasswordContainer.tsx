import React from "react";
import { ResetPasswordTemplate } from "../../components/templates";
import Container from "../container/Container";

interface ResetPasswordContainerProps {
  navigation?: any;
}

const ResetPasswordContainer: React.FC<ResetPasswordContainerProps> = ({
  navigation,
}) => {
  return (
    <Container>
      <ResetPasswordTemplate navigation={navigation} />
    </Container>
  );
};
export default ResetPasswordContainer;
