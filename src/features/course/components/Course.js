import { View, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
  CourseView,
  FlexView,
  FlexWrap,
} from "../../../../style";
import CourseMode from "../../../components/CourseMode";
import CourseFrequency from "../../../components/CourseFrequency";

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
              <CourseFrequency course={course} />
              {/* <Text>{course.price}</Text> */}
            </FlexView>
            <CourseView>
              <CourseMode course={course} />
            </CourseView>
          </FlexView>
        </View>
      </Card>
    </TouchableOpacity>
  </FlexWrap>
);

export default Course;
