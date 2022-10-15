import { React, useEffect, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  FlatList,
} from "react-native";
import courseClient from "../../../api/courseClient";


const ListCourse = ({ route, content }) => {
  const [courses, setCourses] = useState([]);

  const filterByCategory = async (data, category) => {
    let filteredCourse = data.filter((course) => course.category === category);
    return await filteredCourse;
  };
  console.log()
  const CourseByCategory = async (category) => {
    let CourseByCategory = await filterByCategory(course, category);
    await setCourses(CourseByCategory);
  }


  const loadCourses = () => {
    // FIXME - pass param to the network call.
    courseClient
      .get("/course")
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
      <Text>{content.courses}</Text>
      <FlatList
        horizontal={true}
        data={content.category}
        renderItem={renderCategory}
        keyExtractor={(item) => content.Course + "_" + item.category}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default ListCourse;
