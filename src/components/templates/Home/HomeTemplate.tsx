import React from "react";
import { View } from "react-native";
import { GLOBAL } from "../../../constants";
import { HomeHeading } from "../../molecules";
import { AllStories, HeaderBar } from "../../organisms";

interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {
  return (
    <View>
      <HeaderBar />
      <HomeHeading topText={GLOBAL.stories} />
      <AllStories />
    </View>
  );
};
export default HomeTemplate;
