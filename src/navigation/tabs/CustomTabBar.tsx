import { BottomTabBar } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { StyleSheet } from "react-native";
import { LIGHT } from "../../constants";

interface CustomTabBarProps {
  props: any;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ props }) => {
  const CustomTab = (
    <View>
      <View style={styles.CustomTab} />
      <BottomTabBar {...props} />
    </View>
  );
  return isIphoneX() ? CustomTab : <BottomTabBar {...props} />;
};
export default CustomTabBar;

const styles = StyleSheet.create({
  CustomTab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: LIGHT.white,
  },
});
