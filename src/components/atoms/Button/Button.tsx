import React from "react";
import { TouchableOpacity, Text } from "react-native";
import style from "./styles";

interface ButtonProps {
  onPress?: any;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
