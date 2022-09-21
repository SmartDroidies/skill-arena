import { React } from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import { View } from "react-native-web";
import Category from "../components/Category";
import courseClient from "../../../api/courseCient";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/themed";

const categories = [
  {
    title: "Art",
  },
  {
    title: "Music",
  },
  {
    title: "SoftSkill",
  },
  {
    title: "Fitness",
  },
  {
    title: "Lifestyle",
  },
];

const hook = () => {
  const [course, setCourse] = useState([]);
  const getCourse = () => {
    courseClient
      .get("/course")
      .then((response) => {
        setItem(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }
  useEffect(() => {
    getCourse();
  }, course);

}



const renderCategory = ({ item }) => <Category category={item} />;

const Course = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  </SafeAreaView>

);
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});


export default Course;
