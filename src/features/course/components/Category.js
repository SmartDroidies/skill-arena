import { StyleSheet, View } from "react-native";
import { Card, Text, Button } from "@rneui/themed";
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';


  const Category = ({ content, navigation }) => (
    <View style={styles.sample}>
      <Card>
        <Card.Title>
          <Text h4>{content.code}</Text>
          <Button
            titleStyle={styles.link}
            title="Click"
            onPress={() =>
              navigation.navigate("ListCourse", { code: content.code })
            }
            type="clear"
          />
          return (
          <View style={{ flex: 1 }}>
            <Button onPress={() => navigationRef.navigate('Course')}>
              Go courses
            </Button>
            <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>
          </View>
          );
        </Card.Title>
      </Card>
    </View>
  );

  const styles = StyleSheet.create({});

  export default Category;
