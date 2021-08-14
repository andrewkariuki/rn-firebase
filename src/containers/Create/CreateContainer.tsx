import React from "react";
import ShareTemplate from "../../components/templates/Share/ShareTemplate";
import Container from "../container/Container";
import SafeAreaViewContainer from "../container/SafeAreaViewContainer";

interface CreateContainerProps {}

const CreateContainer: React.FC<CreateContainerProps> = ({}) => {
  return (
    <SafeAreaViewContainer>
      <Container>
        <ShareTemplate />
      </Container>
    </SafeAreaViewContainer>
  );
};
export default CreateContainer;
