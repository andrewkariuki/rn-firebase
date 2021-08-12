import React from "react";
import { StyleSheet, View } from "react-native";
import { FONTS, LIGHT } from "../../../constants";
import { Heading, NormalText } from "../../atoms";

interface WelcomeTextsProps {}

const WelcomeTexts: React.FC<WelcomeTextsProps> = ({}) => {
  return (
    <View style={style.welcomeTexts}>
      <View style={style.inner}>
        <Heading
          textAlign="center"
          text="Enjoy the benefits of sharing."
          fontStyle={FONTS.h1}
          color={LIGHT.textColor}
        />
        <NormalText
          textAlign="center"
          text="Share your experiences."
          fontStyle={FONTS.body2}
        />
        <NormalText
          textAlign="center"
          text="Anonymously."
          fontStyle={FONTS.body2}
        />
      </View>
    </View>
  );
};
export default WelcomeTexts;

const style = StyleSheet.create({
  welcomeTexts: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  inner: {
    flexDirection: "column",
    width: 250,
    textAlign: "center",
  },
});
