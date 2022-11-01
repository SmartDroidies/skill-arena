import { FlatList } from "react-native";
import Category from "../components/Category";
import { Container } from "../../../../style";
import useCategory from "../hooks/useCategory"

const ListCategory = ({ navigation }) => {
  const [category] = useCategory([]);

  const numColumns = 2;

  //FIXME - Move the network call to a service
  // useEffect(() => {
  //   courseClient
  //     .get("/category")
  //     .then((response) => {
  //       setCategory(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error :", error);
  //     });
  // }, []);
  // if (loading) return <h1>Loading</h1>;
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
