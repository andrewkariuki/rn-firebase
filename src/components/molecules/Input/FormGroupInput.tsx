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
}

const FormGroupInput: React.FC<FormGroupInputProps> = ({
  label,
  value,
  onBlurFunction,
  onChangeTextFunction,
  secure,
}) => {
  return (
    <View style={styles.cover}>
      <View style={styles.label}>
        <NormalText text={label} fontStyle={FONTS.body2} />
      </View>
      <View style={styles.input}>
        <FormInput
          onBlurFunction={onBlurFunction}
          onChangeTextFunction={onChangeTextFunction}
          value={value}
          secure={secure}
          fontStyle={FONTS.body2}
        />
      </View>
    </View>
  );
};
export default FormGroupInput;

const styles = StyleSheet.create({
  cover: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#E4E4E4",
    marginBottom: 10,
    marginTop: 5,
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
