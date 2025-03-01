import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React, {useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";
// Import your screens
import Index from "./index"; // Home screen
import DailyScreen from "./daily";
import WeeklyScreen from "./weekly";

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();
export default function Layout() {

    const [fontsLoaded] = useFonts({
      Amarante_400Regular, // Load Amarante font
    });
  
    useEffect(() => {
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null; // Prevent rendering UI before fonts load
    }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hides top header
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap =
            route.name === "Home" ? "home" : "settings"; // Ensure TypeScript safety
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor:"#344C2F",
        tabBarInactiveTintColor:"#F3F7F2",
        tabBarStyle: { backgroundColor:"#507345"},
        tabBarLabelStyle: {
          fontFamily: "Amarante_400Regular",
          fontSize: 18, 
        },
        tabBarActiveBackgroundColor: "#5A804D",
      })}
    >
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Daily" component={DailyScreen} />
      <Tab.Screen name="Weekly" component={WeeklyScreen}/>
    </Tab.Navigator>
  );
}
