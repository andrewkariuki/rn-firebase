import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { DARK, LIGHT } from "../../../constants";

interface TabBarIconProps {
  focused?: any;
  icon?: any;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, icon }) => {
  return (
    <Image source={icon} resizeMode="contain" style={styles(focused).icon} />
  );
};
export default TabBarIcon;

const styles = (focused: any) =>
  StyleSheet.create({
    icon: {
      width: 25,
      height: 25,
      tintColor: focused ? DARK.white : LIGHT.primaryButton,
    },
  });
