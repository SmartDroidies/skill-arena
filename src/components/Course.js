import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Card, Image } from "@rneui/themed";

const Course = ({ course, navigation }) => (
  <View style={styles.course_align}>
    <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")}>
      <Card containerStyle={styles.course_card}>
        <Image
          style={styles.course_image}
          resizeMode="cover"
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View style={styles.course_text}>
          <Text>{course.title}</Text>
          <Text>{course.author}</Text>
          <Text>{course.price}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  </View>
);

// FIXME  Create a styled component
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
