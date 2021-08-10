import React from "react";
import { View } from "react-native";
import { Heading } from "../../atoms";
import { style } from "./style";

interface AuthHeadingProps {}

const AuthHeading: React.FC<AuthHeadingProps> = ({}) => {
  return (
    <View style={style.authHeading}>
      <Heading text="Welcome to way!" fontSize={32} />
      <Heading
        text="Register, share your experiences anonymously."
        fontSize={18}
      />
    </View>
  );
};
export default AuthHeading;
