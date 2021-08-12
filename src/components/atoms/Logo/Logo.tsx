import React from "react";
import { Image, View } from "react-native";
import { WehvLogo } from "../../../constants";

import { StyleSheet } from "react-native";

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <View style={styles.cover}>
      <Images style={} source={WehvLogo} resizeMode="contain" />
    </View>
  );
};
export default Logo;

const styles = StyleSheet.create({
  cover: {
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    width: 20,
  },
});
