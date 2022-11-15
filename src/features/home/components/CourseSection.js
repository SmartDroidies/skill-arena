import { React } from "react";
import { FlatList } from "react-native";
import { Text } from "@rneui/themed";
import { CourseSectionView } from "../../../../style";
import FeaturedCourse from "./FeaturedCourse";

const CourseSection = ({ content, navigation }) => {
  const renderCourseCard = ({ item }) => (
    <FeaturedCourse course={item} navigation={navigation} />
  );
  return (
    <CourseSectionView>
      <Text h4>{content.desc}</Text>
      <FlatList
        horizontal={true}
        data={content.courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => content.key + "_" + item.course_id}
        showsHorizontalScrollIndicator={false}
      />
    </CourseSectionView>
  );
};

export default CourseSection;
