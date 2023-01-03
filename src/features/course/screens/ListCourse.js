import { React, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Container, CourseContainer } from "../../../../style";
import Loader from "../../../activity indicator/Loader";
import Course from "../components/Course";
import useCourse from "../hooks/useCourse";

const ListCourse = ({ route, navigation }) => {
  const [courses] = useCourse(route.params.code);
  const [isLoading, errormessage] = useCourse();
  const [viewPreference] = useState("List");

  const renderCourseCard = ({ item }) => (
    <Course course={item} navigation={navigation} />
  );

  const loadCourses = () => {
    navigation.setOptions({
      title: route.params.title,
    });
  };
  const SkillActivityIndicator = () => {
    return (
      <Container>
        <Loader />
      </Container>
    );
  };

  const skillMessage = () => {
    return (
      <Container>
        <Message type="error" text={errormessage} />
      </Container>
    );
  };

  const displayResult = () => {
    return errormessage === "" ? courseListing() : skillMessage();
  };

  const courseListing = () => {
    return viewPreference === "List" ? renderListView() : renderGridView();
  };
  const renderGridView = () => {
    return <ListCourse courses={courses}></ListCourse>;
  };

  const renderListView = () => {
    return <ListCourse courses={courses}></ListCourse>;
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <CourseContainer>
      <FlatList
        data={courses}
        showsVerticalScrollIndicator={false}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.course_id}
      />
      {isLoading ? SkillActivityIndicator() : displayResult()}
    </CourseContainer>
  );
};

export default ListCourse;
