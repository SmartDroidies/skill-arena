import { React } from "react";
import { Text, Card } from "@rneui/themed";
import useCourseDetail from "../hooks/useCourseDetail";
import { View } from "react-native";
import {
  Container,
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
import Message from "../../../activity indicator/Message";

const CourseDetail = ({ route }) => {
  const [courseDetail, isLoading, errorMessage] = useCourseDetail();

  const SkillActivityIndicator = () => {
    return (
      <Container>
        <Loader />
      </Container>
    );
  };

  const skillMessage = () => {
    return <Message type="error" text={errorMessage} />;
  };

  const displayResult = () => {
    return errorMessage === "" ? renderCourseCard() : skillMessage();
  };

  // const singleShare = async (customOptions) => {
  const renderCourseCard = () => {
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
          </FlexView>

          <CourseDetailModeView>
            <CourseMode course={courseDetail} />
          </CourseDetailModeView>
        </View>
      </Card>
    );
  };
  return (
    <Container>
      {isLoading ? SkillActivityIndicator() : displayResult()}
    </Container>
  );
};

export default CourseDetail;
