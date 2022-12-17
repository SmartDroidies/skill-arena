import { View, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
  CourseView,
  FlexView,
  FlexWrap,
  FrequencyView,
} from "../../../../style";
import CourseMode from "../../../components/CourseMode";
import CourseFrequency from "../../../components/CourseFrequency";
import { courseImage } from "../../../utils/ImageUtil";

const Course = ({ course, navigation }) => (
  <FlexWrap>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CourseDetail", { id: course.course_id })
      }
    >
      <Card>
        <CourseImage
          source={{
            uri: courseImage(course.image),
          }}
        />
        <View>
          <CourseTitle>{course.title}</CourseTitle>
          <FlexView direction="row">
            <FlexView direction="column">
              <CourseAuthor>{course.author}</CourseAuthor>
              <FrequencyView>
                <CourseFrequency course={course} />
              </FrequencyView>
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
