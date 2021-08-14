import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeAreaViewContainerProps {}

const SafeAreaViewContainer: React.FC<SafeAreaViewContainerProps> = ({
  children,
}) => {
  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={"#fff"}
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  );
};
export default SafeAreaViewContainer;
