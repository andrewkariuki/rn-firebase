import React from "react";
import { Text } from "react-native";
import { FontProps } from "../../../interfaces";
import { style } from "./styles";

interface HeadingProps {
  text?: string;
  fontStyle?: FontProps;
  color?: string;
  textAlign?: textAlignment;
  marginBottom?: number;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  fontStyle,
  textAlign,
  marginBottom,
}) => {
  return (
    <Text style={style(fontStyle, textAlign, marginBottom).heading}>
      {text}
    </Text>
  );
};
export default Heading;
