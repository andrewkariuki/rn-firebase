import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface ButtonProps {
  onPress: any;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
