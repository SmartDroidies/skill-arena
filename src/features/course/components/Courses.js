import { StyleSheet } from "react-native";
import { Text, Card, View } from "@rneui/themed";

const Course = ({ content,navigation }) => (
  
  <View style={styles.sample}>
    <Card>
      <Card.Title>
        <Text h4>{content.code}</Text>
        <Button
          titleStyle={styles.link}
          title="Click"
          onPress={() =>
            navigation.navigate("ListCourse", { code: content.code})
          }
          type="clear"
        />
      </Card.Title>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  

});

export default Course;