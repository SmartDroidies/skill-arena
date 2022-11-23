import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Avatar } from "@rneui/themed";
import { CategoryTitle, CategoryContainer } from "../../../../style";
const Category = ({ content, navigation }) => {
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
            size="large"
            rounded
            icon={{ name: content.icon_name, type: content.icon_family }}
            containerStyle={styles.avatarContainer}
          />
          <CategoryTitle h1>{content.title}</CategoryTitle>
        </View>
      </TouchableOpacity>
    </CategoryContainer>
  );
};

const styles = StyleSheet.create({
  // FIXME - Have to get rid of this
  // eslint-disable-next-line react-native/no-color-literals
  avatarContainer: {
    alignSelf: "center",
    backgroundColor: "#0000ff",
  },
});

export default Category;
