import { React } from "react";
import { Text, Card } from "@rneui/themed";
import useCourseDetail from "../hooks/useCourseDetail";
import { View } from "react-native";
import {
  CourseAuthor,
  CourseDesc,
  CourseDetailImage,
  CourseTitle,
  CourseView,
  FlexView,
  FrequencyView,
} from "../../../../style";
import CourseMode from "../../../components/CourseMode";
import { courseImage } from "../../../utils/ImageUtil";
import CourseFrequency from "../../../components/CourseFrequency";
import Course from "../components/Course";

const CourseDetail = ({ route }) => {
  const [courseDetail] = useCourseDetail(route.params.id);

  // const singleShare = async (customOptions) => {

  return (
    <Card>
      <CourseDetailImage
        source={{
          uri: courseImage(courseDetail.image),
        }}
      />
      <View>
        <Text>
          {courseDetail.header} {courseDetail.Category}
        </Text>
        <CourseTitle>{courseDetail.title}</CourseTitle>
        <FlexView direction="row">
          <FlexView direction="column">
            <CourseDesc>{courseDetail.desc}</CourseDesc>
            <CourseAuthor>{courseDetail.author}</CourseAuthor>
            <FrequencyView>
              <CourseFrequency course={Course} />
            </FrequencyView>
          </FlexView>
          <CourseView>
            <CourseMode course={courseDetail} />
          </CourseView>
        </FlexView>
      </View>
    </Card>
  );
};

export default CourseDetail;
