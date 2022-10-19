import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import courseClient from "../../../api/courseClient";
import { useEffect, useState } from "react";
import CourseSection from "../components/CourseSection";
import { Container } from "../../../../style";
import { SearchBar } from "@rneui/themed";

const Home = ({ navigation }) => {
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
    <Container>
      <SearchBar/>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {course_section.map((courseSec) => (
          <CourseSection
            content={courseSec}
            key={courseSec.key}
            navigation={navigation}
          ></CourseSection>
        ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default Home;
