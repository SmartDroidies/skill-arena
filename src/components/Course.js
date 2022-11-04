import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import { CourseAuthor, CourseImage, CourseTitle } from "../../style";

const Course = ({ course, navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")}>
      <Card>
        <CourseImage
          resizeMode="stretch"
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View>
          <Text>{course.header}</Text>
          <CourseTitle>
            <Text>{course.title}</Text>
          </CourseTitle>
          <CourseAuthor>
            <Text>{course.author}</Text>
          </CourseAuthor>
          <Text>{course.price}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  </View>
);

export default Course;
