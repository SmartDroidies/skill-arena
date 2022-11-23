import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
  CourseView,
  FlexWrap,
} from "../../../../style";
import CourseMode from "../../../components/CourseMode";

const FeaturedCourse = ({ course, navigation }) => (
  <View>
    <FlexWrap>
      <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")}>
        <Card>
          <CourseImage source={require("../../../../assets/education.jpg")} />
          <View>
            <CourseTitle>
              <Text>Home screen : {course.title}</Text>
            </CourseTitle>
            <CourseAuthor>{course.author}</CourseAuthor>
            <Text>{course.price}</Text>
            <CourseView>
              <CourseMode course={course} />
            </CourseView>
          </View>
        </Card>
      </TouchableOpacity>
    </FlexWrap>
  </View>
);

export default FeaturedCourse;
