import { createStackNavigator } from "@react-navigation/stack";
import CourseDetail from "../screens/CourseDetail";
import Home from "../screens/Home";

export const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="CourseDetail" component={CourseDetail} />
    </HomeStack.Navigator>
  );
};
