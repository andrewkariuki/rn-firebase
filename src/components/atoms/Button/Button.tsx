import React from "react";
import { TouchableOpacity } from "react-native";
import { FontProps } from "../../../interfaces";
import { NormalText } from "../Text";
import { style } from "./styles";

interface ButtonProps {
  onPress?: any;
  text?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  fontStyle?: FontProps;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  color,
  backgroundColor,
  borderColor,
  borderWidth,
  fontStyle,
}) => {
  return (
    <TouchableOpacity
      style={style(backgroundColor, borderColor, borderWidth, fontStyle).button}
      onPress={onPress}>
      <NormalText text={text} color={color} />
    </TouchableOpacity>
  );
};
export default Button;
