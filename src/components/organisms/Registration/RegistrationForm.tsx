import React from "react";
import { View } from "react-native";
import { Button, FormInput, Link, Paragraph } from "../../atoms";
import style from "./styles";

interface RegistrationFormProps {
  navigation: any;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ navigation }) => {
  return (
    <View>
      <FormInput placeholder="Email address" />
      <FormInput placeholder="Password" secure />
      <Button text="Register" />
      <View style={style.authCTO}>
        <Paragraph text="Already got an account?" />
        <Link text="Log in" navigation={navigation} />
      </View>
    </View>
  );
};
export default RegistrationForm;
