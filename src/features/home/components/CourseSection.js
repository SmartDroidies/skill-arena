import { React } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import Course from "../../../components/Course";

const CourseSection = ({ content }) => {
  const renderCourseCard = ({ item }) => <Course course={item} />;
  return (
    <View style={styles.container}>
      <Text h4>{content.desc}</Text>
      <FlatList
        horizontal={true}
        data={content.courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default CourseSection;
