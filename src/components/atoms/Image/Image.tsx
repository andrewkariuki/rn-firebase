import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { IImageStyles } from "../../../interfaces";

interface ImagesProps {
  source: any;
  imageStyles?: IImageStyles;
}

const Images: React.FC<ImagesProps> = ({ source, imageStyles }) => {
  return <Image source={source} style={styles(imageStyles).image} />;
};
export default Images;

const styles = (imageStyles?: IImageStyles) =>
  StyleSheet.create({
    image: { ...imageStyles },
  });
