import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
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
            <CourseTitle>
              <Text>{course.title}</Text>
            </CourseTitle>
            <FlexView direction="row">
              <FlexView direction="column">
                <CourseAuthor>
                  <Text>{course.author}</Text>
                </CourseAuthor>
                <Text>{course.price}</Text>
              </FlexView>
              <CourseMode course={course} />
            </FlexView>
          </View>
        </Card>
      </TouchableOpacity>
    </FlexWrap>
  </View>
);

export default Course;
