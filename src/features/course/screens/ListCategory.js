import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";
import Category from "../components/Category";

const ListCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    courseClient
      .get("/category")
      .then((response) => {
        console.log(response.data);
        setCategory(response.data);
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
        {category.map((category) => (
          <Category content={category}></Category>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default ListCategory;
