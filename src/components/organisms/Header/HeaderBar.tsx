import React from "react";
import { View } from "react-native";
import { Logo } from "../../atoms";
import { StyleSheet } from "react-native";
interface HeaderBarProps {
  navigation?: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({}) => {
  return (
    <View style={styles.HeaderBar}>
      <Logo width={35} height={35} />
    </View>
  );
};
export default HeaderBar;

const styles = StyleSheet.create({
  HeaderBar: {
    flexDirection: "row",
    height: 50,
    marginTop: -10,
    marginLeft: -10,
    marginRight: -10,
    paddingLeft: 10,
    paddingRight: 10,
    alignContent: "center",
  },
});
