import { React, useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import courseClient from "../../../api/courseClient";
import Course from "../../../components/Course";
import { ListCourseView } from "../../../../style";
import styled from "styled-components";


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
    <ListCourseView>
    <View style={styled.container}>
      <Text style={styled.heading}>{route.params.title}</Text>
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.course_id}
      />
    </View>
    </ListCourseView>
  );
};

//FIXME - Used styled components
 const ListCourseView = styled.view({
   container: {
     marginTop: StatusBar.currentHeight || 0,
   },
   heading:{
    fontSize: 30,
     fontWeight: "bold"

   },
 });

export default ListCourse;