import React from "react";
import { View } from "react-native";
import { AuthHeading } from "../../molecules";
import { RegisterTermsOfUs, RegistrationForm } from "../../organisms";

interface RegisterTemplateProps {
  navigation: any;
}

const RegisterTemplate: React.FC<RegisterTemplateProps> = ({ navigation }) => {
  return (
    <View>
      <AuthHeading
        topText="Sign Up"
        subText="Create an account, share your experiences anonymously."
      />
      <RegistrationForm navigation={navigation} />
      <RegisterTermsOfUs />
    </View>
  );
};
export default RegisterTemplate;
