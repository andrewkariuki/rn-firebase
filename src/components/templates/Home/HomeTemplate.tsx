import React from "react";
import { View } from "react-native";
import { GLOBAL } from "../../../constants";
import { HomeHeading } from "../../molecules";

interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {
  return (
    <View>
      <HomeHeading topText={GLOBAL.shares} />
    </View>
  );
};
export default HomeTemplate;
