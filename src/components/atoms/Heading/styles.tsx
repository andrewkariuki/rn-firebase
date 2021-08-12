import { StyleSheet } from "react-native";

export const style = (fontStyle: any) =>
  StyleSheet.create({
    heading: {
      ...fontStyle,
      marginBottom: 18,
      color: "#06040A",
    },
  });
