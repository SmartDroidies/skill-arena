import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Container } from "../../../../style";
import CourseSection from "../components/CourseSection";
import { API_URL } from "@env";
import useHome from "../hooks/useHome";

const Home = ({ navigation }) => {
  const [homeContent] = useHome(API_URL);

  return (
    <Container>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {homeContent.map((courseSec) => (
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
