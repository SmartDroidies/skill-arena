import { React, useEffect } from "react";
import { FlatList } from "react-native";
import { CourseContainer } from "../../../../style";
import Loader from "../../../activity indicator/Loader";
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
      <Loader></Loader>
      <FlatList
        data={courses}
        showsVerticalScrollIndicator={false}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.course_id}
      />
    </CourseContainer>
  );
};

export default ListCourse;
