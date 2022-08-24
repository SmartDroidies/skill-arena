import { StyleSheet } from "react-native";
import { Text, Card, Image } from "@rneui/themed";

const Course = ({ course }) => (
  <Card containerStyle={styles.course_card}>
    <Card.Title>{course.title}</Card.Title>
    <Card.Divider />
    <Image
      style={styles.course_image}
      resizeMode="cover"
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    />
    <Text h4>{course.author}</Text>
    <Text>{course.price}</Text>
  </Card>
);

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  course_card: {
    borderColor: "blue",
  },
  course_image: {
    width: 100,
    height: 100,
  },
});

export default Course;
