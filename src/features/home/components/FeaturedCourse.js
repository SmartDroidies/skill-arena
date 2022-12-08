import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
  FlexWrap,
} from "../../../../style";
import { courseImage } from "../../../utils/ImageUtil";

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
            <CourseTitle>
              <Text>Home screen : {course.title}</Text>
            </CourseTitle>
            <CourseAuthor>
              <Text>{course.author}</Text>
            </CourseAuthor>
            <Text>{course.price}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    </FlexWrap>
  </View>
);

export default FeaturedCourse;
