import React from "react";
import { View } from "react-native";
import { Logo } from "../../atoms";
import { StyleSheet } from "react-native";
import HeaderBarRight from "./HeaderBarRight";
interface HeaderBarProps {
  navigation?: any;
  route?: any;
  options?: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({}) => {
  return (
    <View style={styles.HeaderBar}>
      <HeaderBarRight>
        <Logo width={35} height={35} />
      </HeaderBarRight>

      <View />
    </View>
  );
};
export default HeaderBar;

const styles = StyleSheet.create({
  HeaderBar: {
    flexDirection: "row",
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    alignContent: "center",
  },
});
