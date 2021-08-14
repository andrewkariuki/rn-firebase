import React from "react";
import { StyleSheet, View } from "react-native";
import { FONTS } from "../../../constants";
import { FormInput, NormalText } from "../../atoms";

interface ShareFormTitleProps {
  label?: string;
  value?: string;
  onBlurFunction?: any;
  onChangeTextFunction?: any;
  secure?: boolean;
  errors?: string;
}

const ShareFormTitle: React.FC<ShareFormTitleProps> = ({
  label,
  value,
  onBlurFunction,
  onChangeTextFunction,
  secure,
  errors,
}) => {
  return (
    <View style={styles().wrapper}>
      <View>
        <View>{/* <Images />  */}</View>
        <View style={styles(errors).label}>
          <NormalText
            color={errors ? "#CD6F79" : undefined}
            text={label}
            fontStyle={FONTS.body2}
          />
        </View>
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
  );
};
export default ShareFormTitle;

const styles = (errors?: any) =>
  StyleSheet.create({
    wrapper: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 10,
      marginTop: 5,
      height: 200,
      backgroundColor: errors ? "#DDAECB" : "#E2E2E2",
      borderColor: errors ? "#CD6F79" : undefined,
      borderStyle: errors ? "solid" : undefined,
      borderWidth: errors ? 1 : undefined,
      borderRadius: 6,
    },
    label: {
      paddingLeft: 16,
      marginBottom: 2,
    },
    input: {},
  });
