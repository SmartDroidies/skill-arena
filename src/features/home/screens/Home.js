import React from "react";
import { StyleSheet, Image, FlatList } from "react-native";
import { Text, Card,} from "@rneui/themed";

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

const Course = ({ course }) => (
  <Card style={{

  }}>
    <Card.Title>{course.title}</Card.Title>
    <Card.Divider />
    <Image
      style={{ width: "100%", height: 100 }}
      resizeMode="cover"
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    />
    <Text style={styles.fonts} h4>
      {course.author}
    </Text>
    <Text style={styles.fonts}>{course.price}</Text>
  </Card>
);

const Home = () => {
  const renderCourseCard = ({ item }) => <Course course={item} />;

  return (
    <>
      <Text h4>Some Text</Text>
      <FlatList
        horizontal={true}
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
});

export default Home;
