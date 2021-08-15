import React from "react";
import { SafeAreaView } from "react-native";
import { HomeContainer } from "../../containers";

interface HomeScreenProps {
  navigation?: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <HomeContainer navigation={navigation} />
    </SafeAreaView>
  );
};
export default HomeScreen;
