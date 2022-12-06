import { React } from "react";
import { Text, Card } from "@rneui/themed";
import useCourseDetail from "../hooks/useCourseDetail";
import { View } from "react-native";
import {
  CourseAuthor,
  CourseDesc,
  CourseImage,
  CourseTitle,
  CourseView,
} from "../../../../style";
import CourseMode from "../../../components/CourseMode";

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
        <CourseTitle>{courseDetail.title}</CourseTitle>
        <CourseDesc>{courseDetail.desc}</CourseDesc>
        <CourseAuthor>{courseDetail.author}</CourseAuthor>
        <CourseView>
          <CourseMode course={courseDetail} />
        </CourseView>
      </View>
    </Card>
  );
};

export default CourseDetail;
