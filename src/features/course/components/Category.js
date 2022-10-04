import { StyleSheet, View, GestureResponderHandlers, } from "react-native";
import { Card, Text, Button } from "@rneui/themed";


const Category = ({ content, navigation, route }) => (
  <View style={styles.sample}>
    <Card>
      <Card.Title>
        <Text h4>{content.name}</Text>
        <Button
          titleStyle={styles.link}
          title="Click"
          onPress={() =>
            navigation.navigate('ListCourse', { name: 'Categoryname' })}
          type="clear"
        />
      </Card.Title>
    </Card>
  </View>
);

const styles = StyleSheet.create({});

export default Category;
