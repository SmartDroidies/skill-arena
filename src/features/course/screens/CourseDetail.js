import { React, useEffect } from "react";
import { Text, Card, View } from "react-native";
import { CourseImage } from "../../../../style";

const CourseDetail = ({ course, route }) => {
  // const fetchApi = () => {
  //   courseClient
  //     .get("/course", { params: { ctgry: route.params.code } })
  //     .then((response) => {
  //       setcourses(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error :", error);
  //     });
  // };

  useEffect(() => {
    // fetchApi();
  }, []);

  return (
    <Card>
      <CourseImage
        resizeMode="stretch"
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View>
        <Text>{course.title}</Text>
        <Text>{course.author}</Text>
        <Text>{course.price}</Text>
      </View>
    </Card>
  );
};

export default CourseDetail;
