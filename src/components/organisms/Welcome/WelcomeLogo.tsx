import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Logo } from "../../atoms";

interface WelcomeLogoProps {}

const WelcomeLogo: React.FC<WelcomeLogoProps> = ({}) => {
  return (
    <View style={styles.cover}>
      <Logo />
    </View>
  );
};
export default WelcomeLogo;

const styles = StyleSheet.create({
  cover: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
});
