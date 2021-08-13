import React from "react";
import { Text } from "react-native";
import { FontProps } from "../../../../interfaces";
import { style } from "./Styles";

interface NormalTextProps {
  text?: string;
  color?: string;
  fontStyle?: FontProps;
  textAlign?: textAlignment;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
}

const NormalText: React.FC<NormalTextProps> = ({
  text,
  color,
  fontStyle,
  textAlign,
  marginLeft,
  marginRight,
}) => {
  const styles = { fontStyle, color, textAlign, marginLeft, marginRight };
  return <Text style={style(styles).normal}>{text}</Text>;
};
export default NormalText;
