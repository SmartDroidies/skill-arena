import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  numColumns,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";
import Category from "../components/Category";

const ListCategory = () => {
  const [category, setCategory] = useState([]);


  useEffect(() => {
    courseClient
      .get("/category")
      .then((response) => {
        //console.log(response.data);
        setCategory(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  });

  const item = () => {
    { id: 'work', value; 'WORk' }
    { id: 'hobbies', value; 'HOBBIES' }
    { id: 'fitness', value; 'FITNESS' }
    { id: 'acedamy', value; 'ACEDAMY' }
    { id: 'sports', value; 'SPORTS' }
    { id: 'arts', value; 'ARTS' }
    { id: 'music', value; 'MUSIC' }
    { id: 'lifestyle', value; 'LIFESTYLE' }
  };


  return (

    <SafeAreaView style={styles.container}>

      <ScrollView

        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.itemContainer}>
          <Text>{item} </Text>
        </View>
        <FlatList
          horizontal={true}
          data={item}
          renderItem={item}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          showsHorizontalScrollIndicator={false}
        />


        {category.map((category) => (
          <Category content={category}></Category>
        ))}
      </ScrollView>
    </SafeAreaView >
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: "#7cb48f",
  },

  scrollView: {
    marginHorizontal: "auto",
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: "#7cb48f",
    width: 400,
    flex: 8,

  }


});


export default ListCategory;
