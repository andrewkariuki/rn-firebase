import React from "react";
import { StoryTemplate } from "../../components/templates";
import Container from "../container/Container";
import SafeAreaViewContainer from "../container/SafeAreaViewContainer";

interface StoryContainerProps {}

const StoryContainer: React.FC<StoryContainerProps> = ({}) => {
  return (
    <SafeAreaViewContainer>
      <Container>
        <StoryTemplate />
      </Container>
    </SafeAreaViewContainer>
  );
};
export default StoryContainer;
