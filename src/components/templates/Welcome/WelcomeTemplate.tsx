import React from "react";
import { View } from "react-native";
import {
  WelcomeBottomText,
  WelcomeButtons,
  WelcomeLogo,
  WelcomeTexts,
} from "../../organisms";
import { StyleSheet } from "react-native";

interface WelcomeTemplateProps {
  navigation?: any;
}

const WelcomeTemplate: React.FC<WelcomeTemplateProps> = ({ navigation }) => {
  return (
    <View style={styles.cover}>
      <WelcomeLogo />
      <WelcomeTexts />
      <WelcomeButtons navigation={navigation} />
      <WelcomeBottomText navigation={navigation} />
    </View>
  );
};
export default WelcomeTemplate;

const styles = StyleSheet.create({
  cover: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});
