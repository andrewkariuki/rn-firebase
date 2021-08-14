import React from "react";
import { View } from "react-native";
import { AllStories } from "../../organisms";

interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {
  return (
    <View>
      <AllStories />
    </View>
  );
};
export default HomeTemplate;
