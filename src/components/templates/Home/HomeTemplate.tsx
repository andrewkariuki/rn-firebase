import React from "react";
import { View } from "react-native";
import { AllStories } from "../../organisms";
import { StyleSheet } from "react-native";

interface HomeTemplateProps {
  navigation?: any;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ navigation }) => {
  return (
    <View style={styles.HomeTemplate}>
      <AllStories navigation={navigation} />
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
