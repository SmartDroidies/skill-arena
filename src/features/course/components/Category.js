import { TouchableOpacity, View } from "react-native";
import { Text, Avatar } from "@rneui/themed";
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
      <View >
        <Avatar
          size={84}
          rounded
          icon={{ name: 'heartbeat', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: '#eb1561' }}
        />
        <Text h4>{content.title}</Text>
      </View>
    </TouchableOpacity>
  </Container>
);

export default Category;
