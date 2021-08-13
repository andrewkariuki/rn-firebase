import React from "react";
import { View } from "react-native";
import { Link, NormalText } from "../../atoms";
import { StyleSheet } from "react-native";
import { FONTS, GLOBAL, LIGHT } from "../../../constants";

interface RegisterTermsOfUsProps {}

const RegisterTermsOfUs: React.FC<RegisterTermsOfUsProps> = ({}) => {
  return (
    <View style={styles.cover}>
      <NormalText
        text={GLOBAL.singUpAgreeToPolicy}
        color={LIGHT.textColor}
        fontStyle={FONTS.body3}
      />
      <View style={styles.links}>
        <Link
          text={GLOBAL.terms}
          color={LIGHT.textColor}
          fontStyle={FONTS.h3}
        />
        <NormalText
          text={GLOBAL.and}
          color={LIGHT.textColor}
          fontStyle={FONTS.body3}
          marginLeft={5}
          marginRight={5}
        />
        <Link
          text={GLOBAL.policy}
          color={LIGHT.textColor}
          fontStyle={FONTS.h3}
        />
      </View>
    </View>
  );
};
export default RegisterTermsOfUs;

const styles = StyleSheet.create({
  cover: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  links: { display: "flex", flexDirection: "row" },
});
