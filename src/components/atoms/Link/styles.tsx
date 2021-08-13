import { StyleSheet } from "react-native";
import { LIGHT } from "../../../constants";
import { StyleSheetProps } from "../../../interfaces";
export const style = (styleProps?: StyleSheetProps) =>
  StyleSheet.create({
    link: {
      color: styleProps?.color ? styleProps.color : LIGHT.blue,
      ...styleProps?.fontStyle,
      textDecorationLine: "underline",
      textAlign: styleProps?.textAlign ? styleProps.textAlign : undefined,
      marginStart: styleProps?.marginStart ? styleProps.marginStart : undefined,
    },
  });
