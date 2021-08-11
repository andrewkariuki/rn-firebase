import React from "react";
import { RegisterContainer } from "../../containers";

interface RegisterScreenProps {
  navigation?: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  return <RegisterContainer navigation={navigation} />;
};
export default RegisterScreen;
