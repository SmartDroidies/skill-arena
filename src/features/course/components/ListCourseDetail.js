import { View } from "react-native";
import { Text, Card } from "@rneui/themed";
import { CourseImage } from "../../../../style";

const ListCourseDetail = ({ course }) => (
  <Card>
    <CourseImage
      resizeMode="stretch"
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    />
    {
      <View>
        {/* <View>{<Button onPress={Share} />}</View> */}
        <Text>{course.title}</Text>
        <Text>{course.author}</Text>
        <Text>{course.price}</Text>
      </View>
    }
  </Card>
);

export default ListCourseDetail;
