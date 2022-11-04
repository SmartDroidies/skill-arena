import { TouchableOpacity, View } from "react-native";
import { Text, Avatar } from "@rneui/themed";
import { Container } from "../../../../style";

const Category = ({ content, navigation }) => {
  const iconName = "heartbeat";
  const iconFamily = "font-awesome";

  return (
    <Container>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ListCourse", {
            code: content.code,
            title: content.title,
          })
        }
      >
        <View>
          <Avatar
            size={84}
            rounded
            icon={{ name: iconName, type: iconFamily }}
          />
          <Text h4>{content.title}</Text>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default Category;
