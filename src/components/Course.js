import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import { CourseAuthor, CourseImage, CourseTitle, FlexWrap } from "../../style";

const Course = ({ course, navigation }) => (
  <FlexWrap>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CourseDetail", {
          id: course.course_id,
        })
      }
    >
      <Card>
        <CourseImage source={require("../../assets/education.jpg")} />
        <View>
          <Text>
            {course.header} {course.category}
          </Text>
          <CourseTitle>{course.title}</CourseTitle>
          <CourseAuthor>{course.author}</CourseAuthor>
          <Text>{course.price}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  </FlexWrap>
);

export default Course;
