import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import {
  CourseAuthor,
  CourseImage,
  CourseTitle,
  FlexWrap,
} from "../../../../style";

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
