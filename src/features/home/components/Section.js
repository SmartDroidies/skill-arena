import { React } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import Course from "../../../components/Course";

const Section = ({ head, courses }) => {
  const renderCourseCard = ({ item }) => <Course course={item} />;
  return (
    <View style={styles.container}>
      <Text h4>{head}</Text>
      <FlatList
        horizontal={true}
        data={courses}
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

export default Section;
