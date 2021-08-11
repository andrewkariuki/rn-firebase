import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { globalStyles } from "../../styles";
import { AuthHeading } from "../molecules";
import { LoginForm } from "../organisms";

interface LoginTemplateProps {
  navigation?: any;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always">
        <AuthHeading
          topText="Welcome to Wehv!"
          subText="Login, share your experiences anonymously."
        />
        <LoginForm navigation={navigation} />
      </KeyboardAwareScrollView>
    </View>
  );
};
export default LoginTemplate;
