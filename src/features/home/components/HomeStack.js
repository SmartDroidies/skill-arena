import { createStackNavigator } from "@react-navigation/stack";
import Global from "../../../utils/Global";
import CourseDetail from "../screens/CourseDetail";
import Home from "../screens/Home";

export const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: Global.Constant.appName }}
      />
      <HomeStack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{ title: Global.Constant.appName }}
      />
    </HomeStack.Navigator>
  );
};
