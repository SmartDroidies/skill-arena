import { React } from "react";
import { Text, Card } from "@rneui/base";
import useCourseDetail from "../hooks/useCourseDetail";
import { View } from "react-native";
import { CourseAuthor, CourseImage, CourseTitle } from "../../../../style";
import { Icon } from "@rneui/themed";

const CourseDetail = ({ route }) => {
  const [courseDetail] = useCourseDetail(route.params.id);

  // const singleShare = async (customOptions) => {

  return (
    <Card>
      <CourseImage source={require("../../../../assets/education.jpg")} />
      <View>
        <Text>
          {courseDetail.header} {courseDetail.Category}
        </Text>
        <Text>{route.params.id} </Text>
        <Text>
          <CourseTitle>{courseDetail.title}</CourseTitle>
        </Text>
        <Text>
          <CourseAuthor>{courseDetail.author}</CourseAuthor>
        </Text>
        <Text>{courseDetail.dec} </Text>
        <Icon name="share" size={30} />
      </View>
    </Card>
  );
};

export default CourseDetail;
