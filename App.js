import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./src/features/home/screens/Home";
import Schedule from "./src/features/schedule/screens/Schedule";
import Profile from "./src/features/profile/screens/Profile";
import ListCategory from "./src/features/course/screens/ListCategory";
import Skeleton from "./src/components/Skeleton";

const Tab = createMaterialBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Course"
          component={ListCategory}
          options={{
            tabBarLabel: "Courses",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="google-classroom"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={Schedule}
          options={{
            tabBarLabel: "Schedule",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="coursedetail" component={Skeleton} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
