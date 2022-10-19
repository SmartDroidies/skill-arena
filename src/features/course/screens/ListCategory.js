import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";
import Category from "../components/Category";
import { Container } from "../../../../style";

const ListCategory = ({ navigation }) => {
  const [category, setCategory] = useState([]);

  const numColumns = 2;

  const ListCategory = [
    { order: 10, title: 'Academics' },
    { order: 20, title: 'Aircraft' },
    { order: 30, title: 'Fitness' },
    { order: 40, title: 'Lifestyle' },
    { order: 50, title: 'Music' },
    { order: 60, title: 'Sports' },
    { order: 70, title: 'Work' }
  ]
  
  ListCategory.sort((a, b) => (a.order > b.order) ? 1 : -1)
  
  console.log(ListCategory)

  //FIXME - Move the network call to a service
  useEffect(() => {
    courseClient
      .get("/category")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, []);

  return (
    <Container>
      <FlatList
        data={category}
        renderItem={({ item }) => (
          <Category content={item} navigation={navigation}></Category>
        )}
        keyExtractor={(item) => item.code}
        numColumns={numColumns}
      />
    </Container>
  );
};

export default ListCategory;
