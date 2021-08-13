import React from "react";
import { StyleSheet, View } from "react-native";
import { FONTS } from "../../../constants";
import { FormInput, NormalText } from "../../atoms";

interface FormGroupInputProps {
  label?: string;
  value?: string;
  onBlurFunction?: any;
  onChangeTextFunction?: any;
  secure?: boolean;
  errors?: string;
}

const FormGroupInput: React.FC<FormGroupInputProps> = ({
  label,
  value,
  onBlurFunction,
  onChangeTextFunction,
  secure,
  errors,
}) => {
  const error = errors ? (
    <View>
      <NormalText
        marginTop={2}
        text={errors}
        fontStyle={FONTS.body4}
        color={"#CD6F79"}
      />
    </View>
  ) : null;
  return (
    <View style={styles().wrapper}>
      <View style={styles(errors).cover}>
        <View style={styles(errors).label}>
          <NormalText
            color={errors ? "#CD6F79" : undefined}
            text={label}
            fontStyle={FONTS.body2}
          />
        </View>
        <View style={styles().input}>
          <FormInput
            onBlurFunction={onBlurFunction}
            onChangeTextFunction={onChangeTextFunction}
            value={value}
            secure={secure}
            selectionColor={errors ? "#CD6F79" : undefined}
            fontStyle={FONTS.body2}
          />
        </View>
      </View>
      {error}
    </View>
  );
};
export default FormGroupInput;

const styles = (errors?: any) =>
  StyleSheet.create({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 10,
      marginTop: 5,
    },
    cover: {
      display: "flex",
      flexDirection: "row",
      height: 50,
      backgroundColor: errors ? "#DDAECB" : "#E2E2E2",
      borderColor: errors ? "#CD6F79" : undefined,
      borderStyle: errors ? "solid" : undefined,
      borderWidth: errors ? 1 : undefined,
      borderRadius: 6,
    },
    label: {
      flexBasis: "25%",
      justifyContent: "center",
      paddingLeft: 16,
      marginBottom: 2,
    },
    input: { flexBasis: "75%" },
  });
