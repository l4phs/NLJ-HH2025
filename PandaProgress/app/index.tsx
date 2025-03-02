import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.screenContainer}>
        <Text style={styles.titleHeader}>Panda Progress</Text>
        <Image source={require('@/assets/images/PandaOG.png')} style={styles.image} />
        <Text style={styles.smallFont}>Panda Status: </Text>
        <View style={styles.statusbar}>
        <Image source={require('@/assets/images/Bamboo6Horizontal.png')} style={styles.bambooBar} />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    //flex: 1, // Use flex instead of fixed height
    paddingTop: "6%",
    alignItems: "center",
    backgroundColor: "#8DB580",
    height: "100%"
  },
  titleHeader: {
    fontSize: 44,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
  },
  image: {
    marginTop: "12%",
    width: "100%",
    height: "50%",
    marginBottom: "2%",
    //marginRight: "20%",
  },
  smallFont: {
    fontSize: 24,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
    marginRight: "50%",
    height: "20%",
    width: "40%",
    marginBottom: "-15%",
  },
  statusbar: {
    height: "10%",
    width: "70%",
    backgroundColor: "rgb(38, 65, 31)",
  },
  bambooBar: {
    height: "100%",
    width: "100%",
  }

});
