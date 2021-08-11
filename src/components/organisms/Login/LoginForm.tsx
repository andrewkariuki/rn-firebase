import React from "react";
import { View } from "react-native";
import { Button, FormInput, Link, Paragraph } from "../../atoms";
import { style } from "./styles";

interface LoginFormProps {
  navigation: any;
}

const LoginForm: React.FC<LoginFormProps> = ({ navigation }) => {
  return (
    <View>
      <FormInput placeholder="Email address" />
      <FormInput placeholder="Password" secure />
      <View style={style.authCTO}>
        <Link text="Forgot your password?" navigation={navigation} />
      </View>
      <Button text="Log In" />
      <View style={style.authCTO}>
        <Paragraph text="Don't have an account?" />
        <Link text="Register" navigation={navigation} />
      </View>
    </View>
  );
};
export default LoginForm;
