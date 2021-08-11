import React from "react";
import { Text } from "react-native";
import style from "./styles";

interface LinkProps {
  text?: string;
  navigation?: any;
}

const Link: React.FC<LinkProps> = ({ text, navigation }) => {
  return (
    <Text style={style.link} onPress={() => navigation.navigate("login")}>
      {text}
    </Text>
  );
};
export default Link;
