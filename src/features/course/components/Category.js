import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Card, Text, } from "@rneui/themed";


const Category = ({ content, navigation }) => (
  <View style={styles.sample}>
    <Card>
      <Card.Title>
        <Text h4>{content.title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ListCourse", { code: content.code })}>
        </TouchableOpacity>
      </Card.Title>
    </Card>
  </View >

);

const styles = StyleSheet.create({});

export default Category;
