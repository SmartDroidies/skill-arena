import { React, useEffect } from "react";
import { FlatList } from "react-native";
import { Container, CourseContainer } from "../../../../style";
import Loader from "../../../activity indicator/Loader";
import Message from "../../../activity indicator/Message";
import Course from "../components/Course";
import useCourse from "../hooks/useCourse";

const ListCourse = ({ route, navigation }) => {
  const [courses, isLoading, errorMessage] = useCourse(route.params.code);

  const renderCourseCard = ({ item }) => (
    <Course course={item} navigation={navigation} />
  );

  const loadCourses = () => {
    navigation.setOptions({
      title: route.params.title,
    });
  };

  const skillActivityIndicator = () => {
    return (
      <Container>
        <Loader />
      </Container>
    );
  };

  const skillMessage = () => {
    return (
      <CourseContainer>
        <Message>{errorMessage}</Message>
        {/* <Message type="error" text={errorMessage} /> */}
      </CourseContainer>
    );
  };

  const displayResult = () => {
    return errorMessage === "" ? renderCourseList() : skillMessage();
  };

  const renderCourseList = () => {
    return (
      <FlatList
        data={courses}
        showsVerticalScrollIndicator={false}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.course_id}
      />
    );
  };

  useEffect(() => {
    loadCourses();
    console.log(loadCourses);
  }, []);

  return (
    <CourseContainer>
      {isLoading ? skillActivityIndicator() : displayResult()}
    </CourseContainer>
  );
};

export default ListCourse;
