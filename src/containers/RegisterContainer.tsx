import React from "react";
import { RegisterTemplate } from "../components/templates";

interface RegisterContainerProps {
  navigation?: any;
}

interface FormValues {
  email?: string;
  password?: string;
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({
  navigation,
}) => {
  return <RegisterTemplate navigation={navigation} />;
};
export default RegisterContainer;
