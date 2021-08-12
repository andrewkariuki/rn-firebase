import React from "react";
import { View } from "react-native";
import {
  WelcomeBottomText,
  WelcomeButtons,
  WelcomeTexts,
} from "../../organisms";

interface WelcomeTemplateProps {}

const WelcomeTemplate: React.FC<WelcomeTemplateProps> = ({}) => {
  return (
    <View>
      <WelcomeTexts />
      <WelcomeButtons />
      <WelcomeBottomText />
    </View>
  );
};
export default WelcomeTemplate;
