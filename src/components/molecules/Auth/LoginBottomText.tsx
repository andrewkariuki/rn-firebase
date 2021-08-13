import React from "react";
import { View } from "react-native";
import { LIGHT, FONTS, GLOBAL, ROUTES } from "../../../constants";
import { navigateTo } from "../../../utils";
import { Link, NormalText } from "../../atoms";
import { StyleSheet } from "react-native";

interface LoginBottomTextProps {
  navigation?: any;
}

const LoginBottomText: React.FC<LoginBottomTextProps> = ({ navigation }) => {
  return (
    <View style={style.cover}>
      <NormalText
        color={LIGHT.textColor}
        fontStyle={FONTS.body3}
        text={GLOBAL.haveAccount}
      />
      <Link
        onPress={() => navigateTo(navigation, ROUTES.register)}
        color={LIGHT.textColor}
        fontStyle={FONTS.h3}
        text={GLOBAL.signUp}
        marginStart={5}
      />
    </View>
  );
};
export default LoginBottomText;
const style = StyleSheet.create({
  cover: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
