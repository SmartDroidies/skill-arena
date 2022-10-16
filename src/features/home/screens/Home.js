import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import courseClient from "../../../api/courseClient";
import { useEffect, useState } from "react";
import CourseSection from "../components/CourseSection";
import Container from "../style";

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
  // container: {
  //   
  // },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default Home;

// FIXME - Move this ti generic place for reusing across screens
// const Container = styled.SafeAreaView`
//   margin-top: 10px;
// 	flex: 1;
// `;                                                               