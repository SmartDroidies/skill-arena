import React from "react";
import { StyleSheet, FlatList, SafeAreaView, StatusBar } from "react-native";
import { Text } from "@rneui/themed";
import Course from "../../../components/Course";

const courses = [
  {
    id: 1,
    title: "Course 1 Title",
    author: "First Author",
    price: "Rs 500",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 2,
    title: "Course 2 Title",
    author: "Second Author",
    price: "Rs 600",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 3,
    title: "Course 3 Title",
    author: "Third Author",
    price: "Rs 750",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 4,
    title: "Course 4 Title",
    author: "Final Author",
    price: "Rs 1000",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
];

// FIXME - Make the height scrollable
// FIXME - Component for section

const Home = () => {
  const renderCourseCard = ({ item }) => <Course course={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text h4>First Section Header</Text>
      <FlatList
        horizontal={true}
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
      />

      <Text h4>Second Section Header</Text>
      <FlatList
        horizontal={true}
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
      />

      <Text h4>Third Section Header</Text>
      <FlatList
        horizontal={true}
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Home;
