import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CustomTabBar from "./CustomTabBar";
import { StyleSheet } from "react-native";
import { HomeScreen } from "../../screens";
import { ROUTES } from "../../constants";
import { TabBarCustomButton } from "../../components/atoms";

interface BottomTabProps {}

const Tab = createBottomTabNavigator();

const BottomTab: React.FC<BottomTabProps> = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.TabNavigator,
      }}
      initialRouteName={ROUTES.home}
      tabBar={(props) => <CustomTabBar props={props} />}>
      <Tab.Screen
        name={ROUTES.home}
        component={HomeScreen}
        options={{ tabBarButton: (props) => <TabBarCustomButton {...props} /> }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;

const styles = StyleSheet.create({
  TabNavigator: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    borderTopWidth: 0,
    backgroundColor: "transparent",
    elevation: 0,
  },
});
