import React from "react";
import { View } from "react-native";
import { FONTS } from "../../../constants";
import { truncateString } from "../../../utils";
import { Card, Heading, NormalText } from "../../atoms";

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
    <View>
      <Card>
        <Heading text={shareTitle} fontStyle={FONTS.h2} />
        <NormalText
          text={sharedBody ? truncateString(sharedBody, 150) : undefined}
        />
      </Card>
    </View>
  );
};
export default SingleShare;
