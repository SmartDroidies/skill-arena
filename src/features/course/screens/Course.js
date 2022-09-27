import { React } from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import { View } from "react-native-web";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";


const Course = () => {
  const [Category, setcategory] = useState([]);

  useEffect(() => {
    courseClient
      .get("/category")
      .then((response) => {
        setcategory(response.data);
        // console.log(response.data);
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
        {category.map((Category) => (
          <Category content={category}></Category>
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


export default Course;
