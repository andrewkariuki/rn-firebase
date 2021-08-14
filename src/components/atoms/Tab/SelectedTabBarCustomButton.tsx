import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { DARK } from "../../../constants";

interface SelectedTabBarCustomButtonProps {
  onPress: any;
}

const SelectedTabBarCustomButton: React.FC<SelectedTabBarCustomButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <View style={styles.cover}>
      <View style={styles.coverInner}>
        <View style={styles.SVGCover} />
        <Svg width={70} height={61} viewBox="0 0 75 61">
          <Path
            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
            fill={"white"}
          />
        </Svg>
        <View style={styles.blank} />
      </View>

      <TouchableOpacity style={styles.TouchableOpacity} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};
export default SelectedTabBarCustomButton;

const styles = StyleSheet.create({
  cover: { flex: 1, alignItems: "center" },
  coverInner: { flexDirection: "row", position: "absolute", top: 0 },
  SVGCover: { flex: 1, backgroundColor: "white" },
  blank: { flex: 1, backgroundColor: "white" },
  TouchableOpacity: {
    top: -22.5,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: DARK.secondaryColor,
  },
});
