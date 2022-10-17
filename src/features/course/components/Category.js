import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Text } from "@rneui/themed";
const Category = ({ content, navigation }) => (

  <View>
    <TouchableOpacity
      onPress={() => navigation.navigate("ListCourse", { code: content.code })}
    >
      <Card>
        <View style={{
          width: 90, height: 90, flex: 1, backgroundColor: '#00a2ed'

        }} />
        <Card.Title>
          <Text h4>{content.title}</Text>
        </Card.Title>
      </Card>
    </TouchableOpacity>
  </View>
);

export default Category;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
