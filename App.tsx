import React from "react";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import { Navigation } from "./src/navigation";

const App = () => {
  return (
    <SafeAreaView>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
