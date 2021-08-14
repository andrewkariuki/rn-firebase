import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import { FONTS, GLOBAL, LIGHT } from "../../../constants";
import { AuthProvider } from "../../../services";
import { yupAuthSchema } from "../../../utils";
import { Button } from "../../atoms";
import { FormGroupInput } from "../../molecules";

interface PasswordResetFormProps {}

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => AuthProvider.sendPasswordReset(values)}
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
export default PasswordResetForm;
