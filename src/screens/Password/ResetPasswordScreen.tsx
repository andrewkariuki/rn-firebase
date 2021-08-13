import React from "react";
import { ResetPasswordContainer } from "../../containers";

interface ResetPasswordScreenProps {
  navigation?: any;
}

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({
  navigation,
}) => {
  return <ResetPasswordContainer navigation={navigation} />;
};
export default ResetPasswordScreen;
