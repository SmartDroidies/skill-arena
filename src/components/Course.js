import { StyleSheet } from "react-native";
import { Text, Card, Image } from "@rneui/themed";

const Course = ({ course }) => (
  <Card containerStyle={styles.course_card}>
    <Image
      style={styles.course_image}
      resizeMode="cover"
      source={{
        uri: course.image,
      }}
    />
    <Card.Divider />
    <Text h4>{course.title}</Text>
    <Text>{course.author}</Text>
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
