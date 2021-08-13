import React from "react";
import { FlatList } from "react-native";
import SingleShare from "../../molecules/SingleShare/SingleShare";

interface AllStoriesProps {}

const shares = [
  { id: 1, title: "My first story", body: "tell your store" },
  { id: 2, title: "My first story", body: "tell your store" },
];

const AllStories: React.FC<AllStoriesProps> = ({}) => {
  const renderItem = ({ item }) => (
    <SingleShare shareTitle={item.title} sharedBody={item.body} />
  );
  return (
    <FlatList
      data={shares}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
    />
  );
};
export default AllStories;
