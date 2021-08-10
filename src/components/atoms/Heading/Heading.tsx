import React from "react";
import { Text } from "react-native";
import { style } from "./styles";

interface HeadingProps {
  text?: string;
  fontSize?: number;
}

const Heading: React.FC<HeadingProps> = ({ text, fontSize }) => {
  return <Text style={style(fontSize).heading}>{text}</Text>;
};
export default Heading;
