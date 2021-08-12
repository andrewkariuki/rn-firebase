import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

interface ImagesProps {
  source: any;
  imageStyles: any;
}

const Images: React.FC<ImagesProps> = ({ source, imageStyles }) => {
  return <Image source={source} style={styles(imageStyles).image} />;
};
export default Images;

const styles = (imageStyles: any) =>
  StyleSheet.create({
    image: { ...imageStyles },
  });
