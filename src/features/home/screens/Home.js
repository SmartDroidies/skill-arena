import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import courseClient from "../../../api/courseClient";
import { useEffect, useState } from "react";
import CourseSection from "../components/CourseSection";
import { Container, HomeView, PageView } from "../../../../style";
import styled from "styled-components";

const Home = ({ navigation }) => {
  const [course_section, setSection] = useState([]);

  const sortSection = (sections) => {
    return sections.sort((a, b) => {
      return a.order < b.order;
    });
  };
  useEffect(() => {
    courseClient
      .get("/home")
      .then((response) => {
        setSection(sortSection(response.data));
        // console.log(response.data);`
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  });

  return (
    <Container>
      <PageView
        // style={styled.scrollView}
        // showsVerticalScrollIndicator={false}
      >
        {course_section.map((courseSec) => (
          <CourseSection
            content={courseSec}
            key={courseSec.key}
            navigation={navigation}
          ></CourseSection>
        ))}
      </PageView>
    </Container>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     marginHorizontal: 20,
//     marginVertical: 20,
//   },
// });

export default Home;
