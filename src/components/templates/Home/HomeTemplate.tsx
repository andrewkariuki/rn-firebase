import React from "react";
import { View } from "react-native";
import { HomeHeading } from "../../molecules";

interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {
  return (
    <View>
      <HomeHeading topText="Sign Up" />
    </View>
  );
};
export default HomeTemplate;
