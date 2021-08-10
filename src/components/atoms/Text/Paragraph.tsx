import React from "react";
import { Text } from "react-native";
import style from "./styles";

interface ParagraphProps {
  text?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <Text style={style.paragraph}>{text}</Text>;
};
export default Paragraph;
