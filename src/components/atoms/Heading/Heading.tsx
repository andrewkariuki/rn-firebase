import React from "react";
import { Text } from "react-native";
import { FontProps } from "../../../interfaces";
import { style } from "./styles";

interface HeadingProps {
  text?: string;
  fontStyle?: FontProps;
  color?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, fontStyle }) => {
  return <Text style={style(fontStyle).heading}>{text}</Text>;
};
export default Heading;
