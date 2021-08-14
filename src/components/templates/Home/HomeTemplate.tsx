import React from "react";
import { View } from "react-native";
import { AllStories } from "../../organisms";
import { StyleSheet } from "react-native";

interface HomeTemplateProps {}

const HomeTemplate: React.FC<HomeTemplateProps> = ({}) => {
  return (
    <View style={styles.HomeTemplate}>
      <AllStories />
    </View>
  );
};
export default HomeTemplate;

const styles = StyleSheet.create({
  HomeTemplate: {
    marginTop: -10,
    marginBottom: 40,
  },
});
