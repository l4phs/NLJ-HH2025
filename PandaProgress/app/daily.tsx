import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";
import CircleProgress from "./circleProgress";

//File for daily stats page

export default function DailyScreen() {

  SplashScreen.preventAutoHideAsync();

  const getPercentage = (current: number, goal: number) => { //Get user goal percentages
    return ((current / goal) * 100).toFixed(2);
  };

  //Function to demonstrate how sync will work
  const syncData = () => {
    setSteps(200);
    setCalories(74);
    setSleep(7);
    setExerciseGoal(17);
    setDestress(31);
    return null;
  };


  //Steps Data
  const [steps, setSteps] = useState(0);
  const [stepGoal, setStepGoal] = useState(500);
  const stepsPercentage = getPercentage(steps, stepGoal);

  //Calories Data
  const [calories, setCalories] = useState(0);
  const [calorieGoal, setCalorieGoal] = useState(150);
  const caloriePercentage = getPercentage(calories, calorieGoal);


  //Sleep Data
  const [sleep, setSleep] = useState(0);
  const [sleepGoal, setSleepGoal] = useState(9);
  const sleepPercentage = getPercentage(sleep, sleepGoal);

  //Excercising Data
  const [exercise, setexercise] = useState(0);
  const [exerciseGoal, setExerciseGoal] = useState(30);
  const exercisePercentage = getPercentage(exercise, exerciseGoal);

  //Destressing Data
  const [destress, setDestress] = useState(0);
  const [destressGoal, setDestressGoal] = useState(45);
  const destressPercentage = getPercentage(destress, destressGoal);


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
        <TouchableOpacity style={styles.syncButton} onPress={syncData}>
          <Text style={styles.buttonText}>Sync Data</Text>
        </TouchableOpacity>
        <View style={styles.statsContainer}>

          <View id="Total Steps: " style={styles.individualStats}>
            <Text style={styles.statsTitles}>Total Steps: </Text>
            <View style={styles.individualStatsRow}>
              <CircleProgress
                percentage={stepsPercentage}
                radius={87}
                strokeWidth={25}
                color="#4CAF50"
              />
              <Text style={styles.statusText}>So far today you have accomplished {stepsPercentage}% of your daily step goal. </Text>
            </View>
          </View>

          <View id="Total Calories:" style={styles.individualStats}>
            <Text style={styles.statsTitles}>Total Calories: </Text>
            <View style={styles.individualStatsRow}>
              <CircleProgress
                percentage={caloriePercentage}
                radius={87}
                strokeWidth={25}
                color="#4CAF50"
              />
              <Text style={styles.statusText}>You have accomplished {caloriePercentage}% of your daily calorie goal. </Text>
            </View>
          </View>

          <View id="Total Hours of Sleep: " style={styles.individualStats}>
            <Text style={styles.statsTitles}> Hours Slept: </Text>
            <View style={styles.individualStatsRow}>
              <CircleProgress
                percentage={sleepPercentage}
                radius={87}
                strokeWidth={25}
                color="#4CAF50"
              />
              <Text style={styles.statusText}>Today you have accomplished {sleepPercentage}% of your daily sleep time goal. </Text>
            </View>
          </View>

          <View id="Total Minutes Exercising: " style={styles.individualStats}>
            <Text style={styles.statsTitles}> Total Minutes Exercising: </Text>
            <View style={styles.individualStatsRow}>
              <CircleProgress
                percentage={exercisePercentage}
                radius={87}
                strokeWidth={25}
                color="#4CAF50"
              />
              <Text style={styles.statusText}>So far you have accomplished {exercisePercentage}% of your daily exercise goal. </Text>
            </View>
          </View>
          <View id="Total Minutes Destressing: " style={styles.individualStats}>
            <Text style={styles.statsTitles}> Total Minutes Destressing: </Text>
            <View style={styles.individualStatsRow}>
              <CircleProgress
                percentage={destressPercentage}
                radius={87}
                strokeWidth={25}
                color="#4CAF50"
              />
              <Text style={styles.statusText}>Throughout the day you have reached {destressPercentage}% of your goal for daily destressing. </Text>
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
    backgroundColor: "white",
    zIndex: -1,
  },
  statusText: {
    marginTop: "2%",
    fontSize: 28,
    color: "rgba(34, 51, 31, 0.56)",
    fontFamily: "Amarante_400Regular",
    //backgroundColor: "purple",
    width: "60%",
    height: "60%",
  },
  syncButton: {
    marginTop: 4,
    width: "14%",
    height: "2%",
    borderRadius: 10,
    backgroundColor: "rgba(34, 51, 31, 0.3)",
    left: "34%",
    marginBottom: -15,
    backgroundImage: "@/assets/images/Bamboo6Horizontal.png",
  },
  buttonText: {
    fontFamily: "Amarante_400Regular",
    fontSize: 21,
    color: "#F3F7F2",
    padding: "5%",
    marginLeft: 5,
  }
});

