import React, {useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";

//This file is the first main page that loads

// Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function Index() {
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
      <Text style={styles.titleHeader}>Panda Progress</Text>  
        <Image source={require('@/assets/images/react-logo.png')} style={styles.image} />
        <Text style={styles.smallFont}>Panda Status: </Text>
        <View style={styles.statusbar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, // Use flex instead of fixed height
    paddingTop: 60,
    alignItems: "center",
    backgroundColor:"#8DB580",
    height: "100%"
  },
  titleHeader: {
    fontSize: 44,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
  },
  image: {
    width: 500, 
    height: 600, 
    marginBottom:70,
  },
  smallFont: {
    fontSize: 24,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
    marginRight: 428,
    marginBottom:25,
  },
  statusbar: {
    height: 50,
    width: 575,
    backgroundColor:"rgb(38, 65, 31)",
  },

});
