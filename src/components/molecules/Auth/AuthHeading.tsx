import React from "react";
import { View } from "react-native";
import { FONTS } from "../../../constants";
import { Heading } from "../../atoms";
import { style } from "./style";

interface AuthHeadingProps {
  topText?: string;
  subText?: string;
}

const AuthHeading: React.FC<AuthHeadingProps> = ({ topText, subText }) => {
  return (
    <View style={style.authHeading}>
      <Heading text={topText} fontStyle={FONTS.h1} />
      <Heading text={subText} fontStyle={FONTS.body2} />
    </View>
  );
};
export default AuthHeading;
