import React from "react";
import { Text } from "react-native";
import { style } from "./styles";

interface InputErrorProps {
  errorMessage?: string;
  errorStyle?: any;
}

const InputError: React.FC<InputErrorProps> = ({ errorMessage }) => {
  return <Text style={style(errorMessage).errors}>{errorMessage}</Text>;
};
export default InputError;
