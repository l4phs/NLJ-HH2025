import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";


//File for daily stats page

export default function DailyScreen() {


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
      <Text style={styles.titleHeader}>Daily Stats: </Text>
      <View style={styles.statsContainer}>
        <View id="Total Steps">
          <Text style={styles.statsTitles}>Total Steps: </Text>
          <View style={styles.statusHealth}></View>
        </View>
        <View id="Total ">
          <Text style={styles.statsTitles}>Total Calories: </Text>
          <View style={styles.statusHealth}></View>
        </View>
        <View id="Total ">
          <Text style={styles.statsTitles}> Hours Slept: </Text>
          <View style={styles.statusHealth}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, // Use flex instead of fixed height
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#8DB580",
  },
  titleHeader: {
    fontSize: 38,
    marginRight: 500,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
  },
  statsContainer: { //container space for all health items MAY NEED TO MAKE SCROLLABLE
    marginTop: 40,
    width: 700,
    display: "flex",
    alignContent: "space-evenly",
    flexDirection: "column",
    //backgroundColor: "black",
    gap: 50,
    flexWrap: "wrap",
  },
  statsTitles: { //font class for all status titles
    fontSize: 24,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
    marginBottom: 15,
  },
  statusHealth: { //class for all health status bars
    marginLeft:5,
    width: 200,
    height: 200,  // Set height equal to width for a perfect circle
    borderRadius: 100,  // Half of the width/height for a circle
    backgroundColor: "white"
  }

});

