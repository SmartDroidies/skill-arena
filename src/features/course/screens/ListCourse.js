import { React, useEffect, useState } from "react";
import { StyleSheet, StatusBar, Text, View, FlatList } from "react-native";
import courseClient from "../../../api/courseClient";
import Course from "../../../components/Course";

const ListCourse = ({ route, navigation }) => {
  const [courses, setCourses] = useState([]);

  const renderCourseCard = ({ item }) => (
    <Course course={item} navigation={navigation} />
  );

  const loadCourses = () => {
    console.log("Collecting courses for : ", route.params.code);
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
    <View style={styles.container}>
      <Text>This is {route.params.code}'s Category Name</Text>
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.course_id}
      />
    </View>
  );
};

//FIXME - Used styled components
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default ListCourse;
