import { React } from "react";
import { Text, Card } from "@rneui/themed";
import useCourseDetail from "../hooks/useCourseDetail";
import { View } from "react-native";
import {
  CourseAuthor,
  CourseDesc,
  CourseDetailImage,
  CourseDetailModeView,
  CourseTitle,
  FlexView,
  FrequencyView,
} from "../../../../style";
import CourseMode from "../../../components/CourseMode";
import { courseImage } from "../../../utils/ImageUtil";
import CourseFrequency from "../../../components/CourseFrequency";
import Course from "../components/Course";
import Loader from "../../../activity indicator/Loader";

const CourseDetail = ({ route }) => {
  const [courseDetail] = useCourseDetail(route.params.id);

  // const singleShare = async (customOptions) => {

  return (
    <Card>
      <Loader></Loader>
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
        </FlexView>
        <CourseDetailModeView>
          <CourseMode course={courseDetail} />
        </CourseDetailModeView>
      </View>
    </Card>
  );
};

export default CourseDetail;
