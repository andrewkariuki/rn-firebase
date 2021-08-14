import React from "react";
import { View } from "react-native";
import { FONTS } from "../../../constants";
import { truncateString } from "../../../utils";
import { Card, Heading, NormalText } from "../../atoms";
import { StyleSheet } from "react-native";

interface SingleShareProps {
  shareTitle?: any;
  sharedBody?: any;
  shareId?: any;
}

const SingleShare: React.FC<SingleShareProps> = ({
  shareTitle,
  sharedBody,
}) => {
  return (
    <View style={styles.cover}>
      <Card>
        <Heading marginBottom={10} text={shareTitle} fontStyle={FONTS.h4} />
        <NormalText
          text={sharedBody ? truncateString(sharedBody, 150) : undefined}
        />
      </Card>
    </View>
  );
};
export default SingleShare;
const styles = StyleSheet.create({
  cover: { marginBottom: 5, marginTop: 5 },
});
