import { React } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import Course from "../../../components/Course";

const CourseSection = ({ content, navigation }) => {
  const renderCourseCard = ({ item }) => (
    <Course course={item} navigation={navigation} />
  );
  return (
    //  <Container>
    <View style={styles.container}>
      <Text h4>{content.desc}</Text>
      <FlatList
        horizontal={true}
        data={content.courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => content.key + "_" + item.course_id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
    // </Container> 
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

export default CourseSection;
