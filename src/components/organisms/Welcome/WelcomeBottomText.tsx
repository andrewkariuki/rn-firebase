import React from "react";
import { View } from "react-native";
import { Link, NormalText } from "../../atoms";

interface WelcomeBottomTextProps {}

const WelcomeBottomText: React.FC<WelcomeBottomTextProps> = ({}) => {
  return (
    <View>
      <NormalText text="Already have an account?" />
      <Link text="Sign In" />
    </View>
  );
};
export default WelcomeBottomText;
