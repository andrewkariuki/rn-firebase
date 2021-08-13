import React from "react";
import { SafeAreaView } from "react-native";
import { HomeContainer } from "../../containers";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  return (
    <SafeAreaView>
      <HomeContainer />
    </SafeAreaView>
  );
};
export default HomeScreen;
