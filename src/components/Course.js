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
            uri: course.image,
          }}
        />
        <View style={styles.course_text}>
          <Text>
            {course.course_name}
          </Text>
          <Text>{course.author}</Text>
          <Text>{course.price}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  course_card: {
    borderColor: "grey",
  },
  course_image: {
    width: 100,
    height: 50,
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
