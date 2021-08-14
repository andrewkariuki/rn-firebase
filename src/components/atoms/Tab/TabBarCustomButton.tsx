import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { LIGHT } from "../../../constants";
import SelectedTabBarCustomButton from "./SelectedTabBarCustomButton";

interface TabBarCustomButtonProps {
  accessibilityState?: any;
  onPress?: any;
}

const TabBarCustomButton: React.FC<TabBarCustomButtonProps> = ({
  accessibilityState,
  children,
  onPress,
}) => {
  const isSelected = accessibilityState.selected;
  return isSelected ? (
    <TouchableOpacity
      style={styles.TabBarCustomButton}
      activeOpacity={1}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <SelectedTabBarCustomButton onPress={onPress} />
  );
};
export default TabBarCustomButton;

const styles = StyleSheet.create({
  TabBarCustomButton: { flex: 1, height: 60, backgroundColor: LIGHT.white },
});
