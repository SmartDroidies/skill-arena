import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "@rneui/themed";
import Global from "../../../utils/Global";
import Home from "../screens/Home";
import { StyleSheet } from "react-native";
import SearchBar from "../../searchbar/SearchBar";
import CourseDetail from "../../course/screens/CourseDetail";

export const HomeStack = createStackNavigator();
export const SearchStack = createStackNavigator();

export const HomeNavigator = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: Global.Constant.appName,
          headerRight: () => (
            <Icon
              name="search"
              style={styles.icon}
              onPress={() => navigation.navigate("SearchBar")}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{ title: Global.Constant.appName }}
      />
      <HomeStack.Screen
        screenOptions={{ headerShown: true }}
        name="SearchBar"
        component={SearchBar}
        options={{
          title: "SearchBar",
        }}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
});
