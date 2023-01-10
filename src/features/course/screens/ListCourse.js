import { Text } from "@rneui/themed";
import { React, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Container, CourseContainer } from "../../../../style";
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
      <Container style={styles.container}>
        <Loader />
      </Container>
    );
  };

  const skillMessage = () => {
    return (
      <Container>
        <Text>{errorMessage}</Text>
        {/* <Message type="error" text={errorMessage} /> */}
      </Container>
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
  }, []);

  return (
    <CourseContainer>
      {isLoading ? skillActivityIndicator() : displayResult()}
    </CourseContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "200",
  },
});

export default ListCourse;
