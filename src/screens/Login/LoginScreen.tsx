import React from "react";
import { LoginContainer } from "../../containers";

interface LoginScreenProps {
  navigation?: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return <LoginContainer navigation={navigation} />;
};
export default LoginScreen;
