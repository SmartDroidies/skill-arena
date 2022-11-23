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

const Course = ({ course, navigation }) => (
  <View>
    <FlexWrap>
      <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")}>
        <Card>
          <CourseImage source={require("../../../../assets/education.jpg")} />
          <View>
            <CourseTitle>{course.title}</CourseTitle>
            <FlexView direction="row">
              <FlexView direction="column">
                <CourseAuthor>
                  <Text>{course.author}</Text>
                </CourseAuthor>
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

export default Course;
