import { createStackNavigator } from "@react-navigation/stack";
import ListCategory from "../screens/ListCategory";
import ListCourse from "../screens/ListCourse";
import Global from "../../../utils/Global";

export const CourseStack = createStackNavigator();

export const CourseNavigator = () => {
  return (
    <CourseStack.Navigator screenoptions={{ headerShown: true }}>
      <CourseStack.Screen
        name="ListCategory"
        component={ListCategory}
        options={{
          title: Global.Constant.appName,
        }}
      />
      <CourseStack.Screen
        name="ListCourse"
        component={ListCourse}
        options={{ title: Global.Constant.title }}
      />
    </CourseStack.Navigator>
  );
};
