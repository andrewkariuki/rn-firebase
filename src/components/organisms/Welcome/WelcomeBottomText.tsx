import React from "react";
import { View } from "react-native";
import { Link, NormalText } from "../../atoms";
import { StyleSheet } from "react-native";
import { FONTS, LIGHT } from "../../../constants";

interface WelcomeBottomTextProps {}

const WelcomeBottomText: React.FC<WelcomeBottomTextProps> = ({}) => {
  return (
    <View style={style.cover}>
      <NormalText
        color={LIGHT.textColor}
        fontStyle={FONTS.body3}
        text="Already have an account?"
      />
      <Link color={LIGHT.textColor} fontStyle={FONTS.h3} text="Sign In" />
    </View>
  );
};
export default WelcomeBottomText;

const style = StyleSheet.create({
  cover: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
