import React from "react";
import { RegisterTemplate } from "../components/templates";

interface RegisterContainerProps {}

interface FormValues {
  email?: string;
  password?: string;
}

const RegisterContainer: React.FC<RegisterContainerProps> = ({}) => {
  return <RegisterTemplate />;
};
export default RegisterContainer;
