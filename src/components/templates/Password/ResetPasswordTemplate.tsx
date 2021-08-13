import React from "react";
import { View } from "react-native";
import { GLOBAL } from "../../../constants";
import { AuthHeading } from "../../molecules";
import { PasswordResetForm } from "../../organisms";

interface ResetPasswordTemplateProps {
  navigation?: any;
}

const ResetPasswordTemplate: React.FC<ResetPasswordTemplateProps> = ({}) => {
  return (
    <View>
      <AuthHeading
        topText={GLOBAL.resetPassword}
        subText={GLOBAL.resetPasswordSubHeader}
      />
      <PasswordResetForm />
    </View>
  );
};
export default ResetPasswordTemplate;
