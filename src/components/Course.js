import { View, TouchableOpacity } from "react-native";
import { Text, Card } from "@rneui/themed";
import { CourseAuthor, CourseImage, CourseTitle, FlexWrap } from "../../style";
import { Icon } from "@rneui/base";

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
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column", flex: 2 }}>
                <CourseAuthor>
                  <Text>{course.author}</Text>
                </CourseAuthor>
                <Text>{course.price}</Text>
              </View>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Icon
                  name="headphones"
                  type="font-awesome-5"
                  style={{ margin: 8 }}
                />
                <Icon
                  name="google-classroom"
                  type="material-community"
                  style={{ margin: 8 }}
                />
                <Icon name="people" type="material" style={{ margin: 8 }} />
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </FlexWrap>
  </View>
);

export default Course;
