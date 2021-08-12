import React from "react";
import { Text } from "react-native";
import { FontProps } from "../../../interfaces";
import { style } from "./styles";

interface LinkProps {
  text?: string;
  navigation?: any;
  color?: string;
  underline?: boolean;
  path?: string;
  fontStyle?: FontProps;
  textAlign?: string;
}

const Link: React.FC<LinkProps> = ({ text, fontStyle, color, textAlign }) => {
  const styleProps = { fontStyle, color, textAlign };
  return <Text style={style(styleProps).link}>{text}</Text>;
};
export default Link;
