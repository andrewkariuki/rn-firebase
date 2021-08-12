import React from "react";
import { View } from "react-native";
import { LIGHT, ROUTES } from "../../../constants";
import { Button } from "../../atoms";
import { StyleSheet } from "react-native";
import { navigateTo } from "../../../utils";

interface WelcomeButtonsProps {
  navigation?: any;
}

const WelcomeButtons: React.FC<WelcomeButtonsProps> = ({ navigation }) => {
  return (
    <View style={style.cover}>
      <Button
        onPress={() => navigateTo(navigation, ROUTES.register)}
        text="Sign up with your email."
        color={LIGHT.white}
      />
      <Button
        text="Sign up with google."
        backgroundColor={LIGHT.white}
        color={LIGHT.textColor}
        borderColor={LIGHT.grey}
        borderWidth={1}
      />
    </View>
  );
};
export default WelcomeButtons;

const style = StyleSheet.create({
  cover: {
    marginTop: 50,
    marginBottom: 30,
  },
});
