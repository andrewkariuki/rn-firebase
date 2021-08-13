import { StyleSheet } from "react-native";
import { LIGHT } from "../../../../constants";
import { StyleSheetProps } from "../../../../interfaces";
export const style = (styles?: StyleSheetProps) =>
  StyleSheet.create({
    normal: {
      color: styles?.color ? styles?.color : LIGHT.textColor,
      ...styles?.fontStyle,
      textAlign: styles?.textAlign ? styles?.textAlign : "auto",
      marginLeft: styles?.marginLeft ? styles.marginLeft : undefined,
      marginRight: styles?.marginRight ? styles.marginRight : undefined,
    },
  });
