import { React, useState } from "react";
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
import useCourse from "../hooks/useCourse";

const CourseDetail = ({ route }) => {
  const [courseDetail] = useCourseDetail(route.params.id);
  const [courses] = useCourse(route.params.code);
  const [isLoading, errormessage] = useCourse();
  const [viewPreference] = useState("List");

  const SkillActivityIndicator = () => {
    return <Loader />;
  };

  const skillMessage = () => {
    return <Message type="error" text={errormessage} />;
  };

  const displayResult = () => {
    return errormessage === "" ? courseDetailing() : skillMessage();
  };

  const courseDetailing = () => {
    return viewPreference === "courseDetail"
      ? renderListView()
      : renderGridView();
  };
  const renderGridView = () => {
    return <courseDetail courses={courses}></courseDetail>;
  };

  const renderListView = () => {
    return <courseDetail courses={courses}></courseDetail>;
  };
  // const singleShare = async (customOptions) => {

  return (
    <Card>
      <CourseDetailImage
        source={{
          uri: courseImage(courseDetail.image),
        }}
        PlaceholderContent={<SkillActivityIndicator />}
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
        {isLoading ? SkillActivityIndicator() : displayResult()}
      </View>
    </Card>
  );
};

export default CourseDetail;
