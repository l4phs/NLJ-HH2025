import React, {useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";

//File for Settings stats


export default function SettingsScreen() {


  SplashScreen.preventAutoHideAsync();

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
    <View style={styles.screenContainer}>
      <Text style={styles.titleHeader}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, // Use flex instead of fixed height
    paddingTop: 60,
    alignItems: "center",
    backgroundColor:"#8DB580",
  },
  titleHeader: {
    fontSize: 38,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
  },
});
