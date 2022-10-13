import { StyleSheet, View } from "react-native";
import { Card, Text, Button } from "@rneui/themed";


const Category = ({ content, navigation }) => (
  <View style={styles.sample}>
    <Card>
      <Card.Title>
        <Text h4>{content.title}</Text>
        <Button
          titleStyle={styles.link}
          title="Click"
          onPress={() =>
            navigation.navigate("ListCourse", { code: content.code })
          }
          type="clear"
        />
      </Card.Title>
    </Card>
  </View>
);

const styles = StyleSheet.create({});

export default Category;
