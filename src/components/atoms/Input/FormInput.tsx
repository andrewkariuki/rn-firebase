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
  textColor?: string;
  height?: number;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  secure,
  value,
  fontStyle,
  onBlurFunction,
  onChangeTextFunction,
  selectionColor,
  textColor,
  height,
  multiline,
  numberOfLines,
  maxLength,
}) => {
  return (
    <TextInput
      style={style(textColor, fontStyle, height).input}
      placeholder={placeholder}
      onChangeText={onChangeTextFunction}
      numberOfLines={numberOfLines}
      multiline={multiline}
      value={value}
      onBlur={onBlurFunction}
      secureTextEntry={secure}
      maxLength={maxLength}
      underlineColorAndroid="transparent"
      selectionColor={selectionColor ? selectionColor : "#06040A"}
      autoCapitalize="none"
      placeholderTextColor="#06040A"
    />
  );
};
export default FormInput;
