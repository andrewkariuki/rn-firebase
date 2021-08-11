import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { globalStyles } from "../../styles";
import { AuthHeading } from "../molecules";
import { RegistrationForm } from "../organisms";

interface RegisterTemplateProps {
  navigation: any;
}

const RegisterTemplate: React.FC<RegisterTemplateProps> = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always">
        <AuthHeading
          topText="Welcome to Wehv!"
          subText="Register, share your experiences anonymously."
        />
        <RegistrationForm navigation={navigation} />
      </KeyboardAwareScrollView>
    </View>
  );
};
export default RegisterTemplate;