import React from "react";
import { LoginTemplate } from "../../components/templates";

interface LoginScreenProps {
  navigation?: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return <LoginTemplate navigation={navigation} />;
};
export default LoginScreen;
