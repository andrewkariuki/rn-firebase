import React from "react";
import { StyleSheet, View } from "react-native";
import { FONTS, ICONS, LIGHT, ROUTES, WehvLogo } from "../../../constants";
import { Images, NormalText } from "../../atoms";
import HeaderBarLeft from "./HeaderBarLeft";
import HeaderBarMiddle from "./HeaderBarMiddle";
import HeaderBarRight from "./HeaderBarRight";
interface HeaderBarProps {
  navigation?: any;
  route?: any;
  options?: any;
  title?: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  let routeLeftIcon = null;
  if (title === ROUTES.stories) {
    routeLeftIcon = ICONS.RELOAD;
  }
  if (title === ROUTES.share) {
    routeLeftIcon = ICONS.SEND;
  }
  if (title === ROUTES.settings) {
    routeLeftIcon = ICONS.SIGN_OUT;
  }

  return (
    <View style={styles.HeaderBar}>
      <HeaderBarRight>
        <Images
          source={WehvLogo}
          imageStyles={{ width: 50, height: 50, resizeMode: "center" }}
        />
      </HeaderBarRight>
      <HeaderBarMiddle>
        <NormalText text={title} fontStyle={FONTS.h2} />
      </HeaderBarMiddle>
      <HeaderBarLeft>
        <Images
          source={routeLeftIcon}
          imageStyles={{
            width: 30,
            height: 30,
            resizeMode: "center",
            tintColor: LIGHT.primaryButton,
          }}
        />
      </HeaderBarLeft>
    </View>
  );
};
export default HeaderBar;

const styles = StyleSheet.create({
  HeaderBar: {
    flexDirection: "row",
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
