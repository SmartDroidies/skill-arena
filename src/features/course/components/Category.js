import { StyleSheet, View } from "react-native";
import { Card, Text } from "@rneui/themed";
import { CategoryView } from "../../../../style";


const Category = ({ content }) => (
  <CategoryView>
    <View style={styles.sample}>
      <Card>
        <Card.Title>
          <Text h4>{content.name}</Text>
        </Card.Title>
      </Card>
    </View>
  </CategoryView>
);

const styles = StyleSheet.create({});

export default Category;
