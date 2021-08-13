import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface CardProps {
  onCardPress?: any;
}

const Card: React.FC<CardProps> = ({ onCardPress, children }) => {
  return (
    <TouchableOpacity onPress={onCardPress} style={styles.Card}>
      {children}
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  Card: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    width: "100%",
    height: "auto",
    borderRadius: 4,
  },
});
