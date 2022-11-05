import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import { CourseAuthor, CourseImage, CourseTitle, FlexWrap } from "../../style";

const Course = ({ course, navigation }) => (
  <View>
    <FlexWrap>
      <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")}>
        <Card>
          <CourseImage source={require("../../assets/education.jpg")} />
          <View>
            <Text>{course.header}</Text>
            <CourseTitle>
              <Text>{course.title}</Text>
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

export default Course;
