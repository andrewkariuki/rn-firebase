import React from "react";
import { FlatList } from "react-native";
import { DATA, ROUTES } from "../../../constants";
import SingleShare from "../../molecules/SingleShare/SingleShare";

interface AllStoriesProps {
  navigation: any;
}

const AllStories: React.FC<AllStoriesProps> = ({ navigation }) => {
  const renderItem = ({ item }: { item: any }) => (
    <SingleShare
      onPress={() => navigation.navigate(ROUTES.story, { item })}
      shareTitle={item.title}
      sharedBody={item.body}
    />
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
