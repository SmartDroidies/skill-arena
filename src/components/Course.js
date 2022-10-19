import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Card, Image } from "@rneui/themed";
import styled from "styled-components/native";


const Course = ({ course, navigation }) => (
  <View style={styles.course_align}>
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")}>
        <Card containerStyle={styled.course_card}>
          <Image
            style={styled.course_image}
            resizeMode="stretch"
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View style={styles.course_text}>
            <Text>{course.title}</Text>
            <Text>{course.author}</Text>
            <Text>{course.price}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    </Container>
  </View >
);

// FIXME  Create a styled component
const Container = styled.View`
  course_card: {
    borderColor: "blue";
  },  
  course_image: {
    width: 100,
    height: 100,
  },
  `;
const styles = StyleSheet.create({
  course_text: {
    fontSize: 100,
    marginTop: 20,
  },
  course_align: {
    marginRight: 10,
  },
});


export default Course;
