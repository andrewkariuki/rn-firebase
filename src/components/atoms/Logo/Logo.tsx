import React from "react";
import { StyleSheet, View } from "react-native";
import { WehvLogo } from "../../../constants";
import { Images } from "../Image";

interface LogoProps {
  height?: number;
  width?: number;
}

const Logo: React.FC<LogoProps> = ({ height, width }) => {
  return (
    <View style={styles().cover}>
      <Images source={WehvLogo} imageStyles={styles(height, width).logo} />
    </View>
  );
};
export default Logo;

const styles = (height?: any, width?: any) =>
  StyleSheet.create({
    cover: {
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      height: height ? height : 150,
      width: width ? width : 150,
      resizeMode: "contain",
    },
  });
