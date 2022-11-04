import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import { CourseAuthor, CourseImage, CourseTitle } from "../../style";

const Course = ({ course, navigation }) => (
  <View style={{
    width: 250
  }}>
    <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")}>
      <Card>
        <CourseImage
          resizeMode="stretch"
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View>
          <Text>{course.header}</Text>
          <CourseTitle>
            <Text style={{ numberOfLines: 2, ellipsizeMode: 'tail' }}>{course.title}</Text>
          </CourseTitle>
          <CourseAuthor>
            <Text>{course.author}</Text>
          </CourseAuthor>
          <Text>{course.price}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  </View>
);

export default Course;
