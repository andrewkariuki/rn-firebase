import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import { FONTS, GLOBAL, LIGHT, ROUTES } from "../../../constants";
import { registerUser } from "../../../stores";
import { yupAuthSchema } from "../../../utils";
import { Button, NormalText } from "../../atoms";
import { FormGroupInput } from "../../molecules";

interface RegistrationFormProps {
  navigation: any;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => registerUser(values, navigation, ROUTES.home)}
      validationSchema={yupAuthSchema}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <FormGroupInput
            onBlurFunction={handleBlur("email")}
            value={values.email}
            label={GLOBAL.emailLabel}
            onChangeTextFunction={handleChange("email")}
            errors={errors.email}
          />
          <FormGroupInput
            onBlurFunction={handleBlur("password")}
            value={values.password}
            label={GLOBAL.passwordLabel}
            onChangeTextFunction={handleChange("password")}
            secure
            errors={errors.password}
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
