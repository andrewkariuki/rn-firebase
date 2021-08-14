import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

interface HeaderBarMiddleProps {}

const HeaderBarMiddle: React.FC<HeaderBarMiddleProps> = ({ children }) => {
  return <View style={styles.HeaderBarMiddle}>{children}</View>;
};
export default HeaderBarMiddle;

const styles = StyleSheet.create({
  HeaderBarMiddle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
