import { React, useEffect, useState } from "react";
import { Text, Card, View, Share } from "react-native";
import Course from "../../../components/Course";
import courseClient from "../../../api/courseClient";
import { CourseImage, Container } from "../../../../style";

const CourseDetail = ({ route, navigation }) => {
  const [course, setcourses] = useState([]);

  const renderCourseCard = ({ item }) => (
    <Course course={item} navigation={navigation} />
  );

  const CourseDetail = () => {
    courseClient
      .get("/course", { params: { ctgry: route.params.code } })
      .then((response) => {
        setcourses(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    CourseDetail();
  }, []);

  return (
    <>
      <Container>
        <FlatList
          data={course}
          renderItem={renderCourseCard}
          keyExtractor={(item) => item.course_id}
        />
      </Container>
      <Card>
        <CourseImage
          resizeMode="stretch"
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        {
          <View>
            <View>{<Button onPress={Share} />}</View>
            <Text>{course.title}</Text>
            <Text>{course.author}</Text>
            <Text>{course.price}</Text>
          </View>
        }
      </Card>
    </>
  );
};

export default CourseDetail;
