import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import InputError from "./InputError";
import { style } from "./styles";

interface FormInputProps {
  onChangeTextHandler?: any;
  placeholder?: string;
  value?: string;
  secure?: boolean;
  errorMessage?: string;
  errorStyle?: any;
}

const FormInput: React.FC<FormInputProps> = ({
  onChangeTextHandler,
  placeholder,
  secure,
  value,
  errorStyle,
  errorMessage,
}) => {
  const errors = errorMessage ? (
    <InputError errorStyle={errorStyle} errorMessage={errorMessage} />
  ) : null;
  return (
    <View style={style(errorMessage).inputCover}>
      <TextInput
        style={style(errorMessage).input}
        placeholder={placeholder}
        onChangeText={(text) => onChangeTextHandler(text)}
        value={value}
        secureTextEntry={secure}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        placeholderTextColor="#06040A"
      />
      {errors}
    </View>
  );
};
export default FormInput;
