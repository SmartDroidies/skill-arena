import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
  FlexWrap,
  FlexView,
  CourseView,
} from "../../../../style";
import { courseImage } from "../../../utils/ImageUtil";
import CourseMode from "../../../components/CourseMode";

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
                <Text>{course.price}</Text>
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
