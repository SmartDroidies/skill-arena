import { React } from "react";
import { Text, Card, Icon } from "@rneui/themed";
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
        <Text>{route.params.id} </Text>
        <Text>
          <CourseTitle>{courseDetail.title}</CourseTitle>
        </Text>
        <Text>
          <CourseDesc>{courseDetail.desc}</CourseDesc>
        </Text>
        <Text>
          <CourseAuthor>{courseDetail.author}</CourseAuthor>
        </Text>
        <Text>
          <CourseView>
            <CourseMode course={courseDetail} />
          </CourseView>
        </Text>
        <Text>{courseDetail.dec} </Text>
        <Icon name="share" size={30} />
      </View>
    </Card>
  );
};

export default CourseDetail;
