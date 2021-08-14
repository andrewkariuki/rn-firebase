import { StyleSheet } from "react-native";
import { FontProps } from "../../../interfaces";
export const style = (textColor?: any, fontStyle?: FontProps, height?: any) =>
  StyleSheet.create({
    input: {
      height: height ? height : 50,
      overflow: "hidden",
      color: textColor ? textColor : "#06040A",
      marginBottom: 2,
      paddingLeft: 16,
      ...fontStyle,
    },
    errors: {
      color: "#D20B0A",
      fontSize: 12,
    },
  });
