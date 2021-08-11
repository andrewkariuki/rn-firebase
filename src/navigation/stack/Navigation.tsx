import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegisterScreen } from "../../screens";

interface NavigationProps {}

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"SignUp"}>
        <Stack.Screen name="SignUp" component={RegisterScreen} />
        <Stack.Screen name="SignIn" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
