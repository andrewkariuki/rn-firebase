import React from "react";
import { View } from "react-native";
import { Logo, NormalText } from "../../atoms";
import { StyleSheet } from "react-native";
import HeaderBarRight from "./HeaderBarRight";
import HeaderBarLeft from "./HeaderBarLeft";
interface HeaderBarProps {
  navigation?: any;
  route?: any;
  options?: any;
  title?: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ route, title }) => {
  console.log(route);
  return (
    <View style={styles.HeaderBar}>
      <HeaderBarRight>
        <Logo width={35} height={35} />
      </HeaderBarRight>
      <View>
        <NormalText text={title} />
      </View>
      <HeaderBarLeft>
        <View />
      </HeaderBarLeft>
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
