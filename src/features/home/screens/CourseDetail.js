import { StyleSheet, View, Text, StatusBar } from "react-native";
import { CourseView } from "../../../../style";

const CourseDetail = () => (
  <CourseView>
    <View style={styles.container}>
      <Text>Lets display dummy data</Text>
    </View>
  </CourseView>
);

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default CourseDetail;
