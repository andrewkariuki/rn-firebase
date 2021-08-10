import React from "react";
import { Text } from "react-native";
import style from "./styles";

interface LinkProps {
  text?: string;
}

const Link: React.FC<LinkProps> = ({ text }) => {
  return <Text style={style.link}>{text}</Text>;
};
export default Link;
