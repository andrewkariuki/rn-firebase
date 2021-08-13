import { StyleSheet } from "react-native";
import { FontProps } from "../../../interfaces";
export const style = (textColor?: any, fontStyle?: FontProps) =>
  StyleSheet.create({
    input: {
      height: 50,
      // borderRadius: 5,
      overflow: "hidden",
      color: textColor ? textColor : "#06040A",
      // backgroundColor: "#D20B0A",
      marginBottom: 2,
      paddingLeft: 16,
      ...fontStyle,
    },
    errors: {
      color: "#D20B0A",
      fontSize: 12,
    },
  });
