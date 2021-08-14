import React from "react";
import { StyleSheet, View } from "react-native";
import { ShareForm } from "../../organisms";

interface ShareTemplateProps {}

const ShareTemplate: React.FC<ShareTemplateProps> = ({}) => {
  return (
    <View style={styles.ShareTemplate}>
      <ShareForm />
    </View>
  );
};
export default ShareTemplate;
const styles = StyleSheet.create({
  ShareTemplate: {
    marginTop: -10,
    marginBottom: 40,
  },
});
