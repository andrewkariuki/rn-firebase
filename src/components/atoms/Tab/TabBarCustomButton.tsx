import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import SelectedTabBarCustomButton from "./SelectedTabBarCustomButton";

interface TabBarCustomButtonProps {
  accessibilityState?: any;
  onPress?: any;
  raised?: boolean;
}

const TabBarCustomButton: React.FC<TabBarCustomButtonProps> = ({
  accessibilityState,
  children,
  onPress,
}) => {
  const isSelected = accessibilityState.selected;
  return isSelected ? (
    <SelectedTabBarCustomButton onPress={onPress}>
      {children}
    </SelectedTabBarCustomButton>
  ) : (
    <TouchableOpacity
      style={styles.TabBarCustomButton}
      activeOpacity={1}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
export default TabBarCustomButton;

const styles = StyleSheet.create({
  TabBarCustomButton: { flex: 1, height: 60, backgroundColor: "white" },
});
