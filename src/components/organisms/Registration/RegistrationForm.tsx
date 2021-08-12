import React from "react";
import { View } from "react-native";
import { FONTS, GLOBAL, LIGHT } from "../../../constants";
import { Button, NormalText } from "../../atoms";
import { FormGroupInput } from "../../molecules";

interface RegistrationFormProps {
  navigation: any;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({}) => {
  return (
    <View>
      <FormGroupInput label={GLOBAL.emailLabel} />
      <FormGroupInput label={GLOBAL.passwordLabel} />
      <NormalText text={GLOBAL.passwordRules} fontStyle={FONTS.body3} />
      <Button
        text={GLOBAL.register}
        color={LIGHT.white}
        fontStyle={FONTS.body1}
      />
    </View>
  );
};
export default RegistrationForm;
