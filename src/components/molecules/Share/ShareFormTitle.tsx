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
  const error = errors ? (
    <View>
      <NormalText
        marginTop={2}
        text={errors}
        fontStyle={FONTS.body3}
        color={"#CD6F79"}
      />
    </View>
  ) : null;
  return (
    <View style={styles().cover}>
      <View style={styles(errors).wrapper}>
        <View style={styles().labelWrapper}>
          <View>{/* <Images />  */}</View>
          <View style={styles(errors).label}>
            <NormalText
              color={errors ? "#CD6F79" : undefined}
              text={label}
              fontStyle={FONTS.h2}
            />
          </View>
        </View>
        <View style={styles().input}>
          <FormInput
            onBlurFunction={onBlurFunction}
            onChangeTextFunction={onChangeTextFunction}
            value={value}
            secure={secure}
            height={125}
            textColor={errors ? "#CD6F79" : undefined}
            maxLength={150}
            numberOfLines={4}
            multiline
            selectionColor={errors ? "#CD6F79" : undefined}
            fontStyle={FONTS.body2}
          />
        </View>
      </View>
      {error}
    </View>
  );
};
export default ShareFormTitle;

const styles = (errors?: any) =>
  StyleSheet.create({
    cover: { marginBottom: 10, marginTop: 5 },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      height: 150,
      backgroundColor: errors ? "#DDAECB" : "#E2E2E2",
      borderColor: errors ? "#CD6F79" : undefined,
      borderStyle: errors ? "solid" : undefined,
      borderWidth: errors ? 1 : undefined,
      borderRadius: 6,
    },
    label: {
      paddingLeft: 16,
    },
    input: {
      width: "auto",
      height: "auto",
    },
    labelWrapper: {
      display: "flex",
      flexDirection: "row",
      paddingTop: 10,
      paddingBottom: 5,
    },
  });
