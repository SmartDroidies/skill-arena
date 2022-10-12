import { React } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";



const ListCourse = ({ route,  }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text>This is {route.params.code}'s Category Name</Text>
          <Stack.Screen
            name="Course_name"
            component={CourseScreen}
            getId={({ params }) => params.desc} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default ListCourse;
