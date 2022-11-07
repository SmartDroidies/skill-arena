import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Schedule from "./src/features/schedule/screens/Schedule";
import Profile from "./src/features/profile/screens/Profile";
import { CourseNavigator } from "./src/features/course/components/CourseStack";
import { HomeNavigator } from "./src/features/home/components/HomeStack";
import Header from "./src/features/course/components/Header";
import React from "react";
import { ThemeProvider } from "@rneui/themed";

const Tab = createMaterialBottomTabNavigator();

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeStack"
            component={HomeNavigator}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Course"
            component={CourseNavigator}
            options={{
              headerTitle: () => <Header />,
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
                <MaterialCommunityIcons
                  name="calendar"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Account",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
