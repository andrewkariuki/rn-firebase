import React from "react";
import { StyleSheet, View } from "react-native";
import { WehvLogo } from "../../../constants";
import { Images } from "../Image";

interface LogoProps {
  heigh: number;
  width: number;
}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <View style={styles.cover}>
      <Images source={WehvLogo} imageStyles={styles.logo} />
    </View>
  );
};
export default Logo;

const styles = StyleSheet.create({
  cover: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
});
