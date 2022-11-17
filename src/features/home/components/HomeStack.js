import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "@rneui/base";
import Global from "../../../utils/Global";
import Home from "../screens/Home";
import { StyleSheet } from "react-native";
import CourseDetail from "../../course/screens/CourseDetail";

export const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: Global.Constant.appName,
          headerRight: () => <Icon name="search" style={styles.icon} />,
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

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
});
