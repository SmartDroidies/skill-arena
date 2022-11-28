import { FlatList } from "react-native";
import { Container } from "../../../../style";
import Category from "../components/Category";
import useCategory from "../hooks/useCategory";

const ListCategory = ({ navigation }) => {
  const [category] = useCategory([]);

  const numColumns = 2;

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
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
