import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screens
import Index from "./index"; // Home screen
import DailyScreen from "./daily";

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hides top header
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap =
            route.name === "Home" ? "home" : "settings"; // Ensure TypeScript safety
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#95B299" }, // Match theme
      })}
    >
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Daily" component={DailyScreen} />
    </Tab.Navigator>
  );
}
