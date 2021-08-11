import React from "react";
import { View } from "react-native";
import { Heading } from "../../atoms";
import { style } from "./style";

interface AuthHeadingProps {
  topText?: string;
  subText?: string;
}

const AuthHeading: React.FC<AuthHeadingProps> = ({ topText, subText }) => {
  return (
    <View style={style.authHeading}>
      <Heading text={topText} fontSize={32} />
      <Heading text={subText} fontSize={18} />
    </View>
  );
};
export default AuthHeading;
