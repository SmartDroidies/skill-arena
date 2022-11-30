import { React, useEffect } from "react";
import { FlatList } from "react-native";
import courseClient from "../../../api/courseClient";
import { Container } from "../../../../style";
import Course from "../components/Course";
import useCourse from "../hooks/useCourse";

const ListCourse = ({ route, navigation }) => {
  const [courses, setCourses] = useCourse(route.params.code);

  const renderCourseCard = ({ item }) => (
    <Course course={item} navigation={navigation} />
  );

  const loadCourses = () => {
    navigation.setOptions({
      title: route.params.title,
    });

    courseClient
      .get("/course", { params: { ctgry: route.params.code } })
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <Container>
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.course_id}
      />
    </Container>
  );
};

export default ListCourse;
