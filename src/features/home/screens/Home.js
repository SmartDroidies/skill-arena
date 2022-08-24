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
    image: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
  {
    id: 2,
    title: "Course 2 Title",
    author: "Second Author",
    price: "Rs 600",
    image: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
  {
    id: 3,
    title: "Course 3 Title",
    author: "Third Author",
    price: "Rs 750",
    image: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
  {
    id: 4,
    title: "Course 4 Title",
    author: "Final Author",
    price: "Rs 1000",
    image: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
];

const Home = () => {
  const renderCourseCard = ({ item }) => <Course course={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text h4>Section Header</Text>
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
