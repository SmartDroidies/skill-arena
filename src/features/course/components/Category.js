import { View, TouchableOpacity } from "react-native";
import { Card, Text } from "@rneui/themed";
import { Container } from "../../../../style";
const Category = ({ content, navigation }) => (
  <View>
    <Container>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ListCourse", { code: content.code })
        }
      >
        <Card>
          <Card.Title>
            <Text h4>{content.title} {content.order}</Text>
          </Card.Title>
        </Card>
      </TouchableOpacity>
    </Container>
  </View>
);

export default Category;
