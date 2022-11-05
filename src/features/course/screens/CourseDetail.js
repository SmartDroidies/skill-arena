import { React, useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";
import ListCourseDetail from "../components/ListCourseDetail";
import { FlatList } from "react-native";
import { Container } from "../../../../style";

const CourseDetail = ({ navigation }) => {
  const [course, setcourses] = useState([]);

  const Coursedetail = () => {
    courseClient
      .get("/course")
      .then((response) => {
        setcourses(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };
  useEffect(() => {
    Coursedetail();
  }, []);

  return (
    <>
      <Container>
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <ListCourseDetail
              course={item}
              navigation={navigation}
            ></ListCourseDetail>
          )}
          keyExtractor={(item) => item.title}
        />
      </Container>
    </>
  );
};

export default CourseDetail;
