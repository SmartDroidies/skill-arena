import { React } from "react";
import { Text, FlatList } from "react-native";
import Course from "../../../components/Course";
import { Container } from "../../../../style";
import useCourse from "../hooks/useCourse";

const ListCourse = ({ route, navigation }) => {
  const [courses] = useCourse(route.params.code);

  const renderCourseCard = ({ item }) => (
    <Course course={item} navigation={navigation} />
  );

  return (
    <Container>
      <Text>{route.params.title}</Text>
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.course_id}
      />
    </Container>
  );
};

export default ListCourse;
