import { React } from "react";
import ListCourseDetail from "../components/ListCourseDetail";
import { FlatList } from "react-native";
import { Container } from "../../../../style";
import useCourseDetail from "../hooks/useCourseDetail";

const CourseDetail = ({ navigation, route }) => {
  const [coursedetail, filterCourseDetail] = useCourseDetail([]);

  return (
    <>
      <Container>
        <FlatList
          data={filterCourseDetail}
          renderItem={({ item }) => (
            <ListCourseDetail
              course={item}
              navigation={navigation}
            ></ListCourseDetail>
          )}
        />
      </Container>
    </>
  );
};

export default CourseDetail;
