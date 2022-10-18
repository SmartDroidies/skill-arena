import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import courseClient from "../../../api/courseClient";
import Category from "../components/Category";
import { Container } from "../../../../style";

const ListCategory = () => {
  const [category, setCategory] = useState([]);

  const numColumns = 2;

  useEffect(() => {
    courseClient
      .get("/category")
      .then((response) => {
        // console.log(response.data);
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
        renderItem={({ item }) => <Category content={item}></Category>}
        keyExtractor={(item) => item.code}
        numColumns={numColumns}
      />
    </Container>
  );
};

export default ListCategory;
