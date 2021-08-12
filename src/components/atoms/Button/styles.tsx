import { StyleSheet } from "react-native";
import { LIGHT } from "../../../constants";
import { FontProps } from "../../../interfaces";
export const style = (
  backgroundColor?: any,
  borderColor?: any,
  borderWidth?: any,
  fontStyle?: FontProps
) =>
  StyleSheet.create({
    button: {
      backgroundColor: backgroundColor ? backgroundColor : LIGHT.primaryButton,
      marginTop: 10,
      height: 48,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      borderStyle: "solid",
      borderWidth: borderWidth ? borderWidth : undefined,
      borderColor: borderColor ? borderColor : undefined,
      ...fontStyle,
    },
  });

// "#1F0E5F"
