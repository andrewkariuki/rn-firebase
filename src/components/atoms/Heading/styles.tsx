import { StyleSheet } from "react-native";
import { FontProps } from "../../../interfaces";

export const style = (
  fontStyle?: FontProps,
  textAlign?: textAlignment,
  marginBottom?: any
) =>
  StyleSheet.create({
    heading: {
      ...fontStyle,
      marginBottom: marginBottom ? marginBottom : 18,
      color: "#06040A",
      textAlign: textAlign ? textAlign : undefined,
    },
  });
