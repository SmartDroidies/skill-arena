import { TouchableOpacity, View } from "react-native";
import { Avatar } from "@rneui/themed";
import { CategoryTitle, CategoryContainer } from "../../../../style";
const Category = ({ content, navigation }) => {
  const iconName = "heartbeat";
  const iconFamily = "font-awesome";

  return (
    <CategoryContainer>
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
            size= "large"
            rounded
            icon={{ name: iconName, type: iconFamily}}
            containerStyle={{ backgroundColor: '#6733b9',alignSelf: "center"}}
          />
          <CategoryTitle h1>{content.title}</CategoryTitle>
        </View>
      </TouchableOpacity>
    </CategoryContainer>
  );
};

export default Category;
