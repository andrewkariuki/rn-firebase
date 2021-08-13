import { Formik } from "formik";
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
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <FormGroupInput
            onBlurFunction={() => handleBlur("email")}
            value={values.email}
            label={GLOBAL.emailLabel}
            onChangeTextFunction={() => handleChange("email")}
          />
          <FormGroupInput
            onBlurFunction={() => handleBlur("password")}
            value={values.password}
            label={GLOBAL.passwordLabel}
            onChangeTextFunction={() => handleChange("password")}
            secure
          />
          <NormalText text={GLOBAL.passwordRules} fontStyle={FONTS.body3} />
          <Button
            onPress={() => handleSubmit()}
            text={GLOBAL.register}
            color={LIGHT.white}
            fontStyle={FONTS.body1}
          />
        </View>
      )}
    </Formik>
  );
};
export default RegistrationForm;
