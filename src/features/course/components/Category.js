import { TouchableOpacity } from "react-native";
import { Card, Text } from "@rneui/themed";
import { Container } from "../../../../style";
const Category = ({ content, navigation }) => (
  <Container>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ListCourse", {
          code: content.code,
          title: content.title,
        })
      }
    >
      <Card>
        <Card.Title>
          <Text h4>{content.title}</Text>
        </Card.Title>
      </Card>
    </TouchableOpacity>
  </Container>
);

export default Category;
