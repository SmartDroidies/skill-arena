import { React, useEffect, useState } from "react";
import { FlatList } from "react-native";
import courseClient from "../../../api/courseClient";
import { Container } from "../../../../style";
import Course from "../components/Course";

const ListCourse = ({ route, navigation }) => {
  const [courses, setCourses] = useState([]);

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
