import { createStackNavigator } from "@react-navigation/stack";
import Global from "../../../utils/Global";
import Home from "../screens/Home";
import CourseDetail from "../../course/screens/CourseDetail";
import { useTheme } from "styled-components";

export const HomeStack = createStackNavigator();
export const SearchStack = createStackNavigator();

export const HomeNavigator = ({ navigation }) => {
  const theme = useTheme();
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: Global.Constant.appName,
          headerStyle: {
            backgroundColor: theme.PRIMARY_COLOR,
          },
          headerTintColor: theme.BACKGROUND_COLOR,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <HomeStack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{ title: Global.Constant.appName }}
      />
    </HomeStack.Navigator>
  );
};
