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
    <ScrollView style={{ height: "100%", backgroundColor: "#8DB580" }}>
      <View style={styles.screenContainer}>
        <Text style={styles.titleHeader}>Daily Stats: </Text>
        <View style={styles.statsContainer}>

          <View id="Total Steps: " style={styles.individualStats}>
            <Text style={styles.statsTitles}>Total Steps: </Text>
            <View style={styles.individualStatsRow}>
              <View style={styles.statusHealth}></View>
              <Text style={styles.statusText}>So far today you have accomplised _% of your daily step goal. </Text>
            </View>
          </View>

          <View id="Total Calories:" style={styles.individualStats}>
            <Text style={styles.statsTitles}>Total Calories: </Text>
            <View style={styles.individualStatsRow}>
              <View style={styles.statusHealth}></View>
              <Text style={styles.statusText}>You have accomplised _% of your daily calorie goal. </Text>
            </View>
          </View>

          <View id="Total Hours of Sleep: " style={styles.individualStats}>
            <Text style={styles.statsTitles}> Hours Slept: </Text>
            <View style={styles.individualStatsRow}>
              <View style={styles.statusHealth}></View>
              <Text style={styles.statusText}>Today you have accomplised _% of your daily sleep time goal. </Text>
            </View>
          </View>

          <View id="Total Minutes Exercising: " style={styles.individualStats}>
            <Text style={styles.statsTitles}> Total Minutes Exercising: </Text>
            <View style={styles.individualStatsRow}>
              <View style={styles.statusHealth}></View>
              <Text style={styles.statusText}>You have accomplised _% of your daily calorie goal. </Text>
            </View>
          </View>
          <View id="Total Minutes Destressing: " style={styles.individualStats}>
            <Text style={styles.statsTitles}> Total Minutes Destressing: </Text>
            <View style={styles.individualStatsRow}>
              <View style={styles.statusHealth}></View>
              <Text style={styles.statusText}>Throughout the day you have reached _% of your goal for daily destressing. </Text>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    //flex: 1, // Use flex instead of fixed height
    paddingTop: "5%",
    width: "100%",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#8DB580",
    //marginBottom: 15,
  },
  titleHeader: {
    fontSize: 38,
    marginRight: "65%",
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
  },
  statsContainer: { //container space for all health items MAY NEED TO MAKE SCROLLABLE
    marginTop: "4%",
    //height: "100%",
    width: "95%",
    display: "flex",
    alignContent: "space-evenly",
    flexDirection: "column",
    //backgroundColor: "black",
    gap: "4%",
    flexWrap: "wrap",
  },
  individualStats: {//whiteish container for each health stat
    width: "85%",
    height: "18%",
    borderRadius: 25,
    marginLeft: "0%",
    borderCurve: "circular",
    backgroundColor: "rgba(255, 255, 255, 0.34)",
    padding: "3%",
    marginBottom: "-5%",
    display: "flex",
  },
  statsTitles: { //font class for all status titles
    fontSize: 24,
    color: "rgba(34, 51, 31, 0.56)",
    fontFamily: "Amarante_400Regular",
    marginBottom: 20,
  },
  individualStatsRow: { //container for circle status and text
    width: "100%",
    height: "80%",
    //backgroundColor: "black",
    gap: "8%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",

  },
  statusHealth: { //class for all health status bars
    marginLeft: "3%",
    width: 175,
    height: 175,  // Set height equal to width for a perfect circle
    borderRadius: "50%",  // Half of the width/height for a circle
    backgroundColor: "white"
  },
  statusText: {
    marginTop: "2%",
    fontSize: 28,
    color:"rgba(34, 51, 31, 0.56)",
    fontFamily: "Amarante_400Regular",
    //backgroundColor: "purple",
    width: "60%",
    height: "60%",

  }

});

