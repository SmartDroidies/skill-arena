import { React } from "react";
import ListCourseDetail from "../components/ListCourseDetail";
import { FlatList } from "react-native";
import { Container } from "../../../../style";
import useCourse from "../hooks/useCourse";

const CourseDetail = ({ navigation }) => {
  const [course] = useCourse([]);

  return (
    <>
      <Container>
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <ListCourseDetail
              course={item}
              navigation={navigation}
            ></ListCourseDetail>
          )}
          keyExtractor={(item) => item.course_id}
        />
      </Container>
    </>
  );
};

export default CourseDetail;
