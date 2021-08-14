import React from "react";
import { View } from "react-native";

interface HeaderBarLeftProps {}

const HeaderBarLeft: React.FC<HeaderBarLeftProps> = ({ children }) => {
  return <View>{children}</View>;
};
export default HeaderBarLeft;
