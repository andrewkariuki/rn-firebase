import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CustomTabBar from "./CustomTabBar";
import { StyleSheet } from "react-native";
import { CreateScreen, HomeScreen } from "../../screens";
import { ICONS, ROUTES } from "../../constants";
import { TabBarCustomButton, TabBarIcon } from "../../components/atoms";
import { HeaderBar } from "../../components/organisms";
import { getHeaderTitle } from "@react-navigation/elements";

interface BottomTabProps {}

const Tab = createBottomTabNavigator();

const BottomTab: React.FC<BottomTabProps> = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.TabNavigator,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <HeaderBar
              title={title}
              navigation={navigation}
              route={route}
              options={options}
            />
          );
        },
      }}
      initialRouteName={ROUTES.stories}
      tabBar={(props) => <CustomTabBar props={props} />}>
      <Tab.Screen
        name={ROUTES.stories}
        component={HomeScreen}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={ICONS.HOME} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.share}
        component={CreateScreen}
        options={{
          tabBarButton: (props) => <TabBarCustomButton raised {...props} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={ICONS.CREATE} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.settings}
        component={HomeScreen}
        options={{
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={ICONS.SETTINGS} focused={focused} />
          ),
        }}
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
