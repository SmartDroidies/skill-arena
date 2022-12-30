import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Schedule from "./src/features/schedule/screens/Schedule";
import { CourseNavigator } from "./src/features/course/components/CourseStack";
import { HomeNavigator } from "./src/features/home/components/HomeStack";
import Header from "./src/features/course/components/Header";
import React from "react";
import { lightTheme } from "./src/theme";
import { ThemeProvider } from "styled-components";
import { Icon } from "@rneui/themed";
import Amplify from "@aws-amplify/core";
import { AppNavigator } from "./src/features/home/components/ProfileStack";

const Tab = createMaterialBottomTabNavigator();

Amplify.configure({
  Auth: {
    region: "ap-south-1",
    userPoolId: "ap-south-1_J7feAL3nk",
    userPoolWebClientId: "15a5h8m9p295ig4h9ut7rrhdqs",
  },
  Analytics: {
    disabled: true,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
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
            component={AppNavigator}
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
    </ThemeProvider>
  );
}
