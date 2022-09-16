import { React } from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar,FlatList } from "react-native";
import Category from "../components/Category";

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
