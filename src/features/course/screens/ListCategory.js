import { StyleSheet, SafeAreaView, StatusBar, FlatList } from "react-native";
import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";
import Category from "../components/Category";
import Courses from "../components/Courses"



const courses = ({navigation}) => {

  const [course, setCourses] = useState([]);

  useEffect(() => {
    courseClient
      .get("/Course")
      .then((response) => {
        setCourses(response.data.courses);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, []);
};


const ListCategory = ({ navigation }) => {

  const [category, setCategory] = useState([]);

  const numColumns = 2;

  useEffect(() => {
    courseClient
      .get("/category")
      .then((response) => {
        setCategory(response.data);
        setCourses(response.data.courses)
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={category}
        renderItem={({ item }) => (
          <Category content={item} navigation={navigation}></Category>
        )}
        keyExtractor={(item) => item.category_id}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default ListCategory;
