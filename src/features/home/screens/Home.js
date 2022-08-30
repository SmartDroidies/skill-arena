import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Divider } from "@rneui/themed";
import Section from "../components/Section";

const courses = [
  {
    id: 1,
    title: "Course 1",
    author: "First Author",
    price: "Rs 500",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 2,
    title: "Course 2",
    author: "Second Author",
    price: "Rs 600",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 3,
    title: "Course 3",
    author: "Third Author",
    price: "Rs 750",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 4,
    title: "Course 4",
    author: "Final Author",
    price: "Rs 1000",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
];


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Section head="First Section" courses={courses}></Section>
        <Divider />

        <Section head="Second Section" courses={courses}></Section>
        <Divider />

        <Section head="Third Section" courses={courses}></Section>
        <Divider />
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
