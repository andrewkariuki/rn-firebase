import { StyleSheet } from "react-native";
import { LIGHT } from "../../../constants";
export const style = (backgroundColor?: any, borderColor?: any) =>
  StyleSheet.create({
    button: {
      backgroundColor: backgroundColor ? backgroundColor : LIGHT.primaryButton,
      marginTop: 10,
      height: 48,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      borderStyle: "solid",
      borderColor: borderColor ? borderColor : null,
    },
  });

// "#1F0E5F"
