import React from "react";
import { View } from "react-native";

interface HeaderBarRightProps {}

const HeaderBarRight: React.FC<HeaderBarRightProps> = ({ children }) => {
  return <View>{children}</View>;
};
export default HeaderBarRight;
