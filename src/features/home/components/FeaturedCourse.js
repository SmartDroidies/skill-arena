import { View, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
  FlexWrap,
  FlexView,
  CourseView,
  FrequencyView,
} from "../../../../style";
import { courseImage } from "../../../utils/ImageUtil";
import CourseMode from "../../../components/CourseMode";
import CourseFrequency from "../../../components/CourseFrequency";

const FeaturedCourse = ({ course, navigation }) => (
  <View>
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
              <FlexView direction="column" grow="8">
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
  </View>
);

export default FeaturedCourse;
