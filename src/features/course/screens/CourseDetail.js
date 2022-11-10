import { React } from "react";
import { Container } from "../../../../style";
import { Text } from "@rneui/base";
import useCourseDetail from "../hooks/useCourseDetail";

const CourseDetail = ({ route }) => {
  const [courseDetail] = useCourseDetail(route.params.id);
  return (
    <Container>
      <Text>Display course details for {route.params.id} </Text>
      <Text>{courseDetail.title} </Text>
    </Container>
  );
};

export default CourseDetail;
