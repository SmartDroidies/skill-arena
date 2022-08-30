import { React } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import Course from "../../../components/Course";

const courses = [
  {
    id: 1,
    title: "Course 1",
    author: "First Author",
    price: "Rs 500",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 2,
    title: "Course 2",
    author: "Second Author",
    price: "Rs 600",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 3,
    title: "Course 3",
    author: "Third Author",
    price: "Rs 750",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 4,
    title: "Course 4",
    author: "Final Author",
    price: "Rs 1000",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
];

const Section = () => {
  const renderCourseCard = ({ item }) => <Course course={item} />;
  const sectionHead = "Section head";

  return (
    <View style={styles.container}>
      <Text h4>{sectionHead}</Text>
      <FlatList
        horizontal={true}
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
});

export default Section;
