import { createStackNavigator } from "@react-navigation/stack";
import ListCategory from "../screens/ListCategory";
import ListCourse from "../screens/ListCourse";

export const CourseStack = createStackNavigator();

export const CourseNavigator = ( ) => {
  return (
    <CourseStack.Navigator screenOptions={{ headerShown: true,}}>
      <CourseStack.Screen name="ListCategory" component={ListCategory}
      options={{title: 'ListCategory'}}/>
      <CourseStack.Screen name="ListCourse" component={ListCourse}
      options={{title: 'ListCourses'}} />
    </CourseStack.Navigator>
  );
};
