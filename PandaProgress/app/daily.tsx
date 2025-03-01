import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";


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
    <ScrollView style={{height: "100%", backgroundColor: "#8DB580"}}>
      <View style={styles.screenContainer}>
        <Text style={styles.titleHeader}>Daily Stats: </Text>
        <View style={styles.statsContainer}>
          <View id="Total Steps" style={styles.idividualStats}>
            <Text style={styles.statsTitles}>Total Steps: </Text>
            <View style={styles.statusHealth}></View>
          </View>
          <View id="Total " style={styles.idividualStats}>
            <Text style={styles.statsTitles}>Total Calories: </Text>
            <View style={styles.statusHealth}></View>
          </View>
          <View id="Total " style={styles.idividualStats}>
            <Text style={styles.statsTitles}> Hours Slept: </Text>
            <View style={styles.statusHealth}></View>
          </View>
        </View>
      </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, // Use flex instead of fixed height
    paddingTop: "2%",
    width: "100%",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#8DB580",
    marginBottom: 15,
  },
  titleHeader: {
    fontSize: 38,
    marginRight: "80%",
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
  },
  statsContainer: { //container space for all health items MAY NEED TO MAKE SCROLLABLE
    marginTop: "4%",
    height: "100%",
    width: "93%",
    display: "flex",
    alignContent: "space-evenly",
    flexDirection: "column",
    //backgroundColor: "black",
    gap: "5%",
    flexWrap: "wrap",
  },
  idividualStats: {
    width: "80%",
    height: 300,
    borderRadius: 25,
    borderCurve: "circular",
    backgroundColor: "rgba(255, 255, 255, 0.34)",
    padding: "3%"
  },
  statsTitles: { //font class for all status titles
    fontSize: 24,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
    marginBottom: 20,
  },
  statusHealth: { //class for all health status bars
    marginLeft: "3%",
    width: 175,
    height: 175,  // Set height equal to width for a perfect circle
    borderRadius: "50%",  // Half of the width/height for a circle
    backgroundColor: "white"
  }

});

