import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";
import Category from "../components/Category";
import { CategoryView } from "../../../../style";

const ListCategory = ({ navigation }) => {
  const [category, setCategory] = useState([]);

  const numColumns = 2;

  // const order = (a, b) => {
  // return (a.order - b.order)
  // }
  //console.log(order.sort(order))


  //FIXME - Move the network call to a service
  useEffect(() => {
    courseClient
      .get("/category")
    category.sort((a, b) => (a.order > b.order) ? 1 : -1)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, []);

  return (
    <CategoryView>
      <FlatList
        data={category}
        renderItem={({ item }) => (
          <Category content={item} navigation={navigation}></Category>
        )}
        keyExtractor={(item) => item.code}
        numColumns={numColumns}
      />
    </CategoryView>
  );
};

export default ListCategory;
