import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import courseClient from "../../../api/courseClient";
import { useEffect, useState } from "react";
import CourseSection from "../components/CourseSection";

const Home = () => {
  const [course_section, setSection] = useState([]);

  useEffect(() => {
    courseClient
      .get("/home")
      .then((response) => {
        setSection(response.data);
        // console.log(response.data);`
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {course_section.map((courseSec) => (
          <CourseSection content={courseSec}></CourseSection>
        ))}
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

export default Home;
