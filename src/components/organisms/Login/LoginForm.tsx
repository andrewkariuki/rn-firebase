import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import { FONTS, GLOBAL, LIGHT, ROUTES } from "../../../constants";
import { AuthProvider } from "../../../services";
import { navigateTo, yupAuthSchema } from "../../../utils";
import { Button, Link } from "../../atoms";
import { FormGroupInput } from "../../molecules";

interface LoginFormProps {
  navigation: any;
}

const LoginForm: React.FC<LoginFormProps> = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        const response = AuthProvider.login(values);
        if (response) {
          return navigation.navigate(ROUTES.home);
        }
      }}
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
          <Link
            textAlign="right"
            text={GLOBAL.forgotPassword}
            onPress={() => navigateTo(navigation, ROUTES.resetPassword)}
            color={LIGHT.textColor}
            fontStyle={FONTS.h3}
          />
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
export default LoginForm;
