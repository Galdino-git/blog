import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost}></Button>
      <FlatList
        data={state}
        keyExtractor={(state) => state.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <FontAwesome name="trash-o" style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 30,
    color: "black",
  },
});

export default IndexScreen;
