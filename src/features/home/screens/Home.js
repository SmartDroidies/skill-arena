import { SearchBar } from "@rneui/themed";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Container } from "../../../../style";
import CourseSection from "../components/CourseSection";
import useHome from "../hooks/useHome";

const Home = ({ navigation }) => {
  const [homeContent] = useHome();

  return (
    <Container>
      <SearchBar></SearchBar>
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
  },
});

export default Home;
