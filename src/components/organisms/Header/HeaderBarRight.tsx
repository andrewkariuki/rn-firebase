import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface HeaderBarRightProps {}

const HeaderBarRight: React.FC<HeaderBarRightProps> = ({ children }) => {
  return (
    <TouchableOpacity style={styles.HeaderBarRight}>
      {children}
    </TouchableOpacity>
  );
};
export default HeaderBarRight;

const styles = StyleSheet.create({
  HeaderBarRight: {
    width: 50,
    alignContent: "flex-start",
    justifyContent: "center",
  },
});
