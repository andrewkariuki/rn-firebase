import React from "react";
import { Text } from "react-native";
import { FontProps } from "../../../interfaces";
import { style } from "./styles";

interface LinkProps {
  text?: string;
  color?: string;
  underline?: boolean;
  onPress?: any;
  fontStyle?: FontProps;
  textAlign?: textAlignment;
  marginStart?: number;
}

const Link: React.FC<LinkProps> = ({
  text,
  fontStyle,
  color,
  textAlign,
  onPress,
  marginStart,
}) => {
  const styleProps = { fontStyle, color, textAlign, marginStart };
  return (
    <Text style={style(styleProps).link} onPress={onPress}>
      {text}
    </Text>
  );
};
export default Link;
