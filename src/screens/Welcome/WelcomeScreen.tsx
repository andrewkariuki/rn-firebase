import React from "react";
import { WelcomeContainer } from "../../containers";

interface WelcomeScreenProps {
  navigation?: any;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return <WelcomeContainer navigation={navigation} />;
};
export default WelcomeScreen;
