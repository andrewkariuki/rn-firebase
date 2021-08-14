import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import { FONTS, GLOBAL, LIGHT } from "../../../constants";
import { AuthProvider } from "../../../services";
import { yupAuthSchema } from "../../../utils";
import { Button } from "../../atoms";
import { FormGroupInput } from "../../molecules";

interface NewPasswordFormProps {}

const NewPasswordForm: React.FC<NewPasswordFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{ password: "", confirm: "" }}
      onSubmit={(values) => AuthProvider.passwordReset(values)}
      validationSchema={yupAuthSchema}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <FormGroupInput
            onBlurFunction={handleBlur("password")}
            value={values.password}
            label={GLOBAL.passwordLabel}
            onChangeTextFunction={handleChange("password")}
            secure
            errors={errors.password}
          />
          <FormGroupInput
            onBlurFunction={handleBlur("confirm")}
            value={values.confirm}
            label={GLOBAL.confirmPasswordLabel}
            onChangeTextFunction={handleChange("confirm")}
            secure
            errors={errors.confirm}
          />
          <Button
            onPress={() => handleSubmit()}
            text={GLOBAL.resetPasswordInstructions}
            color={LIGHT.white}
            fontStyle={FONTS.body1}
          />
        </View>
      )}
    </Formik>
  );
};
export default NewPasswordForm;
