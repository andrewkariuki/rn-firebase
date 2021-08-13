import React from "react";
import { View } from "react-native";
import { GLOBAL } from "../../../constants";
import { HomeHeading } from "../../molecules";
import { HeaderBar } from "../../organisms";

interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {
  return (
    <View>
      <HeaderBar />
      <HomeHeading topText={GLOBAL.shares} />
    </View>
  );
};
export default HomeTemplate;
