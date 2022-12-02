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
              uri: "https://skill-hunt.s3.ap-south-1.amazonaws.com/github.png",
            }}
          />
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
            </FlexView>
          </View>
        </Card>
      </TouchableOpacity>
    </FlexWrap>
  </View>
);

export default FeaturedCourse;
