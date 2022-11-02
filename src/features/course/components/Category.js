import { TouchableOpacity, View } from "react-native";
import { Card, Text } from "@rneui/themed";
import { Container } from "../../../../style";
import { CourseImage } from "../../../../style";

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
        <CourseImage
          resizeMode="stretch"
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </Card>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text h4>{content.title}</Text>
      </View>
    </TouchableOpacity>
  </Container>
);

export default Category;
