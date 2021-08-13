import React from "react";
import { StyleSheet, View } from "react-native";
import { FONTS } from "../../../constants";
import { Heading } from "../../atoms";

interface HomeHeadingProps {
  topText?: string;
  subText?: string;
}

const HomeHeading: React.FC<HomeHeadingProps> = ({ topText }) => {
  return (
    <View style={style.authHeading}>
      <Heading text={topText} fontStyle={FONTS.h1} />
    </View>
  );
};
export default HomeHeading;

export const style = StyleSheet.create({
  authHeading: {
    marginBottom: 15,
    marginTop: 18,
  },
});
