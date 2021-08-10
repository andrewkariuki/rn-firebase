import { StyleSheet } from "react-native";
export const style = (errorMessage: any) =>
  StyleSheet.create({
    inputCover: { marginBottom: 10, marginLeft: 30, marginRight: 30 },
    input: {
      height: 48,
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: "white",
      marginBottom: 2,
      marginTop: 10,
      paddingLeft: 16,
      borderColor: errorMessage ? "#D20B0A" : "#1F0E5F",
      borderWidth: 1,
      fontSize: 16,
    },
    errors: {
      color: "#D20B0A",
      fontSize: 12,
    },
  });
