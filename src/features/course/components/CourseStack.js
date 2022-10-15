import { createStackNavigator } from "@react-navigation/stack";
import ListCategory from "../screens/ListCategory";
import ListCourse from "../screens/ListCourse";

export const CourseStack = createStackNavigator();

export const CourseNavigator = ( ) => {
  return (
    <CourseStack.Navigator screenOptions={{ headerShown: false }}>
      <CourseStack.Screen name="ListCategory" component={ListCategory} />
      <CourseStack.Screen name="ListCourse" component={ListCourse} />
    </CourseStack.Navigator>
  );
};
