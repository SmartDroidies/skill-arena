import { View, TouchableOpacity } from "react-native";
import { Card, Text } from "@rneui/themed";
const Category = ({ content, navigation }) => (

  <View>
    <TouchableOpacity
      onPress={() => navigation.navigate("ListCourse", { code: content.code })}
    >
      <Card>
        <Card.Title>
          <Text h4>{content.title}</Text>
        </Card.Title>
      </Card>
    </TouchableOpacity>
  </View>
);

export default Category;

