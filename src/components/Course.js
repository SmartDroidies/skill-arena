import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import { AuthorText, CourseImage, StyledText } from "../../style";

const Course = ({ course, navigation }) => (
  <View>
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
          <StyledText>
            <Text>{course.title}</Text>
          </StyledText>
          <AuthorText>
            <Text>{course.author}</Text>
          </AuthorText>
          <Text>{course.price}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  </View>
);

export default Course;
