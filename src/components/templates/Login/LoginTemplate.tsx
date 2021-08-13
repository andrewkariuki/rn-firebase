import React from "react";
import { View } from "react-native";
import { AuthHeading, LoginBottomText } from "../../molecules";
import { LoginForm } from "../../organisms";

interface LoginTemplateProps {
  navigation?: any;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ navigation }) => {
  return (
    <View>
      <AuthHeading
        topText="Welcome back!"
        subText="Login, share your experiences anonymously."
      />
      <LoginForm navigation={navigation} />
      <LoginBottomText navigation={navigation} />
    </View>
  );
};
export default LoginTemplate;
