import { StyleSheet, View } from "react-native";
import { Text, Card, Image } from "@rneui/themed";

const Course = ({ course }) => (
  <View style={styles.course_align}
  >

    <Card containerStyle={styles.course_card}>
      <Image
        style={styles.course_image}
        resizeMode="cover"
        source={{
          uri: course.image,
        }}
      />

    </Card>
    <View style={styles.course_text}>
      <Text h4>{course.course_name}</Text>
      <Text>RUDYARD KIPLING</Text>
      <Text>Rs.300</Text>
    </View>
  </View>
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
  course_text: {
    fontSize: 100,
    marginTop: 20,
  },
  course_align: {
    marginRight: 10,
  },
});

export default Course;
