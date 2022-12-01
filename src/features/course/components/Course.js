import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
  CourseView,
  FlexView,
  FlexWrap,
} from "../../../../style";
import CourseMode from "../../../components/CourseMode";
import CourseFrequency from "../../../components/Coursefrequency";

const Course = ({ course, navigation }) => (
  <FlexWrap>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CourseDetail", { id: course.course_id })
      }
    >
      <Card>
        <CourseImage source={require("../../../../assets/education.jpg")} />
        <View>
          <CourseTitle>{course.title}</CourseTitle>
          <FlexView direction="row">
            <FlexView direction="column">
              <CourseAuthor>{course.author}</CourseAuthor>
              <Text>{course.price}</Text>
            </FlexView>
            <CourseView>
              <CourseMode course={course} />
            </CourseView>
            <CourseFrequency>{course.frequency}</CourseFrequency>
          </FlexView>
        </View>
      </Card>
    </TouchableOpacity>
  </FlexWrap>
);

export default Course;
