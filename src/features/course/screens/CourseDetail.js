import { React } from "react";
import { Text, Card } from "@rneui/base";
import useCourseDetail from "../hooks/useCourseDetail";
import { View } from "react-native";

const CourseDetail = ({ route }) => {
  const [courseDetail] = useCourseDetail(route.params.id);

  return (
    <Card>
      <View>
        <Text>Display course details for {route.params.id} </Text>
        <Text>{courseDetail.title} </Text>
        <Text>{courseDetail.dec} </Text>
      </View>
    </Card>
  );
};

export default CourseDetail;
