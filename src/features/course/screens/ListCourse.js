import { React, useEffect } from "react";
import { FlatList } from "react-native";
import { CourseContainer } from "../../../../style";
import Course from "../components/Course";
import useCourse from "../hooks/useCourse";

const ListCourse = ({ route, navigation }) => {
  const [courses] = useCourse(route.params.code);

  const renderCourseCard = ({ item }) => (
    <Course course={item} navigation={navigation} />
  );

  const loadCourses = () => {
    navigation.setOptions({
      title: route.params.title,
    });
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <CourseContainer>
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.course_id}
      />
    </CourseContainer>
  );
};

export default ListCourse;
