import React from "react";
import { TouchableOpacity } from "react-native";
import { NormalText } from "../Text";
import { style } from "./styles";

interface ButtonProps {
  onPress?: any;
  text?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  color,
  backgroundColor,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={style(backgroundColor, borderColor).button}
      onPress={onPress}>
      <NormalText text={text} color={color} />
    </TouchableOpacity>
  );
};
export default Button;
