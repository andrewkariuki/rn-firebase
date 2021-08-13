import React from "react";
import { View } from "react-native";
import { Link, NormalText } from "../../atoms";
import { StyleSheet } from "react-native";
import { FONTS, LIGHT, ROUTES } from "../../../constants";
import { navigateTo } from "../../../utils";

interface WelcomeBottomTextProps {
  navigation?: any;
}

const WelcomeBottomText: React.FC<WelcomeBottomTextProps> = ({
  navigation,
}) => {
  return (
    <View style={style.cover}>
      <NormalText
        color={LIGHT.textColor}
        fontStyle={FONTS.body3}
        text="Already have an account?"
      />
      <Link
        onPress={() => navigateTo(navigation, ROUTES.login)}
        color={LIGHT.textColor}
        fontStyle={FONTS.h3}
        text="Sign In"
        marginStart={5}
      />
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
