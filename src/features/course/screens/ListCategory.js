import { FlatList } from "react-native";
import Category from "../components/Category";
import useCategory from "../hooks/useCategory";

const ListCategory = ({ navigation }) => {
  const [category] = useCategory([]);

  const numColumns = 2;

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
