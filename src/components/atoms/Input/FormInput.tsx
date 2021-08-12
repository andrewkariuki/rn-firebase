import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { FontProps } from "../../../interfaces";
import { style } from "./styles";

interface FormInputProps {
  onChangeTextHandler?: any;
  placeholder?: string;
  value?: string;
  secure?: boolean;
  errorMessage?: string;
  errorStyle?: any;
  fontStyle?: FontProps;
  selectionColor?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  onChangeTextHandler,
  placeholder,
  secure,
  value,
  fontStyle,
}) => {
  return (
    <TextInput
      style={style(fontStyle).input}
      placeholder={placeholder}
      onChangeText={(text) => onChangeTextHandler(text)}
      value={value}
      secureTextEntry={secure}
      underlineColorAndroid="transparent"
      selectionColor="#06040A"
      autoCapitalize="none"
      placeholderTextColor="#06040A"
    />
  );
};
export default FormInput;
