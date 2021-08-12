import React from "react";
import { WelcomeContainer } from "../../containers";

interface WelcomeScreenProps {
  navigation?: any;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({}) => {
  return <WelcomeContainer />;
};
export default WelcomeScreen;
