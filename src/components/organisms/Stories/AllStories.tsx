import React from "react";
import { FlatList } from "react-native";
import { DATA } from "../../../constants";
import SingleShare from "../../molecules/SingleShare/SingleShare";

interface AllStoriesProps {}

const AllStories: React.FC<AllStoriesProps> = ({}) => {
  const renderItem = ({ item }: { item: any }) => (
    <SingleShare shareTitle={item.title} sharedBody={item.body} />
  );
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
    />
  );
};
export default AllStories;
