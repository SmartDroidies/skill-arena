import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";
import Category from "../components/Category";
import { Container } from "../../../../style";

const ListCategory = ({ navigation }) => {
  const [category, setCategory] = useState([]);

  const numColumns = 2;

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
