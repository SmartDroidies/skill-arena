import { StyleSheet, View } from "react-native";
import { Card, Text } from "@rneui/themed";

const Category = ({ category }) => (
  <View style={styles.sample}>
    <Card>
      <Card.Title>
        <Text h4>{category.title}</Text>
      </Card.Title>
    </Card>
  </View>
);

const styles = StyleSheet.create({});

export default Category;
