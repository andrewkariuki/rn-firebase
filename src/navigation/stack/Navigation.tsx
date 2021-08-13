import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LIGHT, ROUTES } from "../../constants";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  WelcomeScreen,
} from "../../screens";
import NewPasswordScreen from "../../screens/Password/NewPasswordScreen";
import auth from "@react-native-firebase/auth";

interface NavigationProps {}

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: LIGHT.background,
    border: "transparent",
  },
};
// initialRouteName={ROUTES.welcome}
const Navigation: React.FC<NavigationProps> = ({}) => {
  const user = auth().currentUser;
  console.log(user);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user ? (
          <>
            <Stack.Screen name={ROUTES.home} component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name={ROUTES.welcome} component={WelcomeScreen} />
            <Stack.Screen name={ROUTES.register} component={RegisterScreen} />
            <Stack.Screen name={ROUTES.login} component={LoginScreen} />
            <Stack.Screen
              name={ROUTES.resetPassword}
              component={ResetPasswordScreen}
            />
            <Stack.Screen
              name={ROUTES.newPassword}
              component={NewPasswordScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
