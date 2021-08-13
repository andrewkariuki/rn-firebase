import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { FontProps } from "../../../interfaces";
import { style } from "./styles";

interface FormInputProps {
  placeholder?: string;
  value?: string;
  secure?: boolean;
  errorMessage?: string;
  errorStyle?: any;
  fontStyle?: FontProps;
  selectionColor?: string;
  onBlurFunction?: any;
  onChangeTextFunction?: any;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  secure,
  value,
  fontStyle,
  onBlurFunction,
  onChangeTextFunction,
}) => {
  return (
    <TextInput
      style={style(fontStyle).input}
      placeholder={placeholder}
      onChangeText={onChangeTextFunction}
      value={value}
      onBlur={onBlurFunction}
      secureTextEntry={secure}
      underlineColorAndroid="transparent"
      selectionColor="#06040A"
      autoCapitalize="none"
      placeholderTextColor="#06040A"
    />
  );
};
export default FormInput;
