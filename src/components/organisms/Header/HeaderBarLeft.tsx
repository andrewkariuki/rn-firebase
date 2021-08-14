import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface HeaderBarLeftProps {}

const HeaderBarLeft: React.FC<HeaderBarLeftProps> = ({ children }) => {
  return (
    <TouchableOpacity style={styles.HeaderBarLeft}>{children}</TouchableOpacity>
  );
};
export default HeaderBarLeft;

const styles = StyleSheet.create({
  HeaderBarLeft: { width: 50, justifyContent: "center" },
});
