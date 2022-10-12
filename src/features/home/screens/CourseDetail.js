import { StyleSheet, View, Text, StatusBar } from "react-native";

const CourseDetail = () => (
  <View style={styles.container}>
    <Text>Lets display dummy data</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default CourseDetail;
