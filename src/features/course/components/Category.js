import { TouchableOpacity, View, Text } from "react-native";
import { Avatar } from "@rneui/themed";
import {
  CategoryTitle,
  CategoryContainer,
  AvatarContainer,
} from "../../../../style";
const Category = ({ content, navigation }) => {
  return (
    <CategoryContainer>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ListCourse", {
            code: content.code,
            title: content.title,
            mode: content.mode,
          })
        }
      >
        <View>
          <AvatarContainer>
            <Avatar
              size="large"
              rounded
              icon={{ name: content.icon_name, type: content.icon_family }}
            />
          </AvatarContainer>
          <CategoryTitle h1>{content.title}</CategoryTitle>
          <Text>{content.mode}</Text>
        </View>
      </TouchableOpacity>
    </CategoryContainer>
  );
};

// const styles = StyleSheet.create({
//   // FIXME - Have to get rid of this
//   // eslint-disable-next-line react-native/no-color-literals
//   avatarContainer: {
//     alignSelf: "center",
//     backgroundColor: "#4169E1",
//   },
// });

export default Category;
