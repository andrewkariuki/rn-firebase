import React from "react";
import { StyleSheet, View } from "react-native";
import { FONTS, LIGHT } from "../../../constants";
import { Heading, NormalText } from "../../atoms";

interface WelcomeTextsProps {}

const WelcomeTexts: React.FC<WelcomeTextsProps> = ({}) => {
  return (
    <View style={style.welcomeTexts}>
      <Heading
        text="Enjoy the benefits of sharing."
        fontStyle={FONTS.h1}
        color={LIGHT.textColor}
      />
      <NormalText text="Share your experiences." fontStyle={FONTS.body2} />
      <NormalText text="Anonymously." fontStyle={FONTS.body2} />
    </View>
  );
};
export default WelcomeTexts;

const style = StyleSheet.create({
  welcomeTexts: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
});
