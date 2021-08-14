import React from "react";
import { View } from "react-native";
import { ShareForm } from "../../organisms";

interface ShareTemplateProps {}

const ShareTemplate: React.FC<ShareTemplateProps> = ({}) => {
  return (
    <View>
      <ShareForm />
    </View>
  );
};
export default ShareTemplate;
