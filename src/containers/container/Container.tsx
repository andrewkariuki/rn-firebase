import React from "react";
import { View } from "react-native";

import { StyleSheet } from "react-native";

interface ContainerProps {
  props?: any;
}

const Container: React.FC<ContainerProps> = ({ ...props }) => {
  return <View style={style.container}>{props.children}</View>;
};
export default Container;

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
});
