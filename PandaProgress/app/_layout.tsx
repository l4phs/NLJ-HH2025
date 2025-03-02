import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";
import { View } from "react-native";
import Index from "./index";
import DailyScreen from "./daily";
import AverageScreen from "./average";
import SettingsScreen from "./settings";

const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {
  const [fontsLoaded] = useFonts({
    Amarante_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <Tab.Navigator
                screenOptions={({ route }) => ({
                  headerShown: false,
                  tabBarShowLabel: false,
                  tabBarStyle: {
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: [{ translateX: 275 }],
                    width: 250,
                    height: 70,
                    backgroundColor: "#507345",
                    borderRadius: 35,
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                  },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          switch (route.name) {
            case "Daily":
              iconName = "calendar";
              break;
            case "Average":
              iconName = "bar-chart";
              break;
            case "Settings":
              iconName = "settings";
              break;
          }

          return (
            <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: focused ? "#5A804D" : "transparent",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: focused ? 2 : 0,
              borderColor: focused ? "#A1C398" : "transparent",
            }}
          >
              <Ionicons name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: "#344C2F",
        tabBarInactiveTintColor: "rgba(141, 181, 128, 0.6)",
      })}
    >
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Daily" component={DailyScreen} />
      <Tab.Screen name="Average" component={AverageScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator></GestureHandlerRootView>
  );
}
