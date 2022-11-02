import { View, TouchableOpacity } from "react-native";
import { Card, Text } from "@rneui/themed";
import { Container } from "../../../../style";
const Category = ({ content, navigation }) => (
  <View>
    <TouchableOpacity
      onPress={() => navigation.navigate("ListCourse", { code: content.code,title: content.title })}
    >
      <Card>
        <Card.Title>
          <Text h4>{content.title}</Text>
        </Card.Title>
      </Card>
    </TouchableOpacity>
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
