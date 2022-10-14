import { React, useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import courseClient from "../../../api/courseClient";

const ListCourse = ({ route }) => {
  const [courses, setCourses] = useState([]);

  const loadCourses = () => {
    // FIXME - pass param to the network call.
    courseClient
      .get("/course")
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
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text>This is {route.params.code}'s Category Name</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default ListCourse;
