import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Card, Image } from "@rneui/themed";
import { CourseText } from "../../style";


const Course = ({ course, navigation }) => (
  <View style={styles.course_align}>
    <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")}>
      <Card containerStyle={styles.course_card}>
        <Image
          style={styles.course_image}
          resizeMode="stretch"
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View style={styles.course_text}>
          <CourseText>          
          <Text>{course.title}</Text>
          <Text>{course.author}</Text>
          <Text>{course.price}</Text>
          </CourseText>
        </View>
      </Card>
    </TouchableOpacity>
  </View >
);

// FIXME  Create a styled component
const styles = StyleSheet.create({
  course_card: {
    borderColor: "blue",
  },
  course_image: {
    width: 100,
    height: 100,
  },
  course_align: {
    marginRight: 10,
  },
});


export default Course;
