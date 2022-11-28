import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Schedule from "./src/features/schedule/screens/Schedule";
import Profile from "./src/features/profile/screens/Profile";
import { CourseNavigator } from "./src/features/course/components/CourseStack";
import { HomeNavigator } from "./src/features/home/components/HomeStack";
import Header from "./src/features/course/components/Header";
import React from "react";
import { Icon } from "@rneui/themed";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
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
              <Icon name="book-open" color={color} type="feather" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={Schedule}
          options={{
            tabBarLabel: "Schedule",
            tabBarIcon: ({ color }) => (
              <Icon
                name="calendar-month-outline"
                type="material-community"
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
              <Icon
                name="account"
                type="material-community"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
