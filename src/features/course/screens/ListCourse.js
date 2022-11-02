import { React, useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import courseClient from "../../../api/courseClient";
import Course from "../../../components/Course";
import { Container } from "../../../../style";

const ListCourse = ({ route, navigation }) => {
  const [courses, setCourses] = useState([]);

  const renderCourseCard = ({ item }) => (
    <Course course={item} navigation={navigation} />
  );

  const loadCourses = () => {
    console.log("Collecting courses for : ", route.params);
    courseClient
      .get("/course", { params: { ctgry: route.params.code } })
      .then((response) => {
        console.log("Courses ", response.data);
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
      <Text >{route.params.title}</Text>
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.course_id}
      />
    </Container>
  );
};

export default ListCourse;
