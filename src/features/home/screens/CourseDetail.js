import { Text, Card } from "react-native";
import { CourseImage } from "../../../../style";
import { View } from "react-native";
import courseClient from "../../../api/courseClient";


const CourseDetail = ({course}) =>{(
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

const fetchApi = () => {
  courseClient
    .get("/course", { params: { ctgry: route.params.code } })
    .then((response) => {
      setcourses
      (response.data);
    })
    .catch((error) => {
      console.log("Error :", error);
    });
};

useEffect(() => {
  fetchApi();
}, []);

return [course];
};

export default CourseDetail;