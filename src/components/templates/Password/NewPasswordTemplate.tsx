import React from "react";
import { View } from "react-native";
import { GLOBAL } from "../../../constants";
import { AuthHeading } from "../../molecules";
import { NewPasswordForm } from "../../organisms";

interface NewPasswordTemplateProps {}

const NewPasswordTemplate: React.FC<NewPasswordTemplateProps> = ({}) => {
  return (
    <View>
      <AuthHeading
        topText={GLOBAL.newPassword}
        subText={GLOBAL.newPasswordSubHeader}
      />
      <NewPasswordForm />
    </View>
  );
};
export default NewPasswordTemplate;
