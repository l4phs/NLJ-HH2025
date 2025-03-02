import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";

// File for Average stats

export default function AverageScreen() {
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

  const statsData = {
    totalSteps: '4866 average steps of all time',
    allTimeStats: [
      { day: 'Sunday', steps: 449013 },
      { day: 'Monday', steps: 1101688 },
      { day: 'Tuesday', steps: 1307123 },
      { day: 'Wednesday', steps: 1267063 },
      { day: 'Thursday', steps: 1272596 },
      { day: 'Friday', steps: 1021011 },
      { day: 'Saturday', steps: 477813 },
    ],
    yearlyStats: [
      { day: 'Sunday', steps: 26746 },
      { day: 'Monday', steps: 30509 },
      { day: 'Tuesday', steps: 42619 },
      { day: 'Wednesday', steps: 71381 },
      { day: 'Thursday', steps: 34218 },
      { day: 'Friday', steps: 47135 },
      { day: 'Saturday', steps: 17077 },
    ],
    averageStepsPerMile: 2873,
    longestStreak: "9 days, starting on 19 January 2023",
    dailyGoalPercentage: "17% of days reached daily goal",
    stepsNeededToHitGoal: 3640,
    userStatus: "User is above average steps today",
  };

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <Text style={styles.titleHeader}>Average Stats</Text>

      {/* Total Steps */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Total Steps:</Text>
        <Text style={styles.statsText}>{statsData.totalSteps}</Text>
      </View>

      {/* All Time Steps */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>All Time Steps:</Text>
        {statsData.allTimeStats.map((item, index) => (
          <Text key={index} style={styles.statsText}>
            {item.day}: {item.steps} steps
          </Text>
        ))}
      </View>

      {/* Yearly Stats */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>2025 Steps:</Text>
        {statsData.yearlyStats.map((item, index) => (
          <Text key={index} style={styles.statsText}>
            {item.day}: {item.steps} steps
          </Text>
        ))}
      </View>

      {/* Average Steps per Mile */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Average Steps per Mile:</Text>
        <Text style={styles.statsText}>{statsData.averageStepsPerMile}</Text>
      </View>

      {/* Longest Streak */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Longest Streak of Hitting Goal:</Text>
        <Text style={styles.statsText}>{statsData.longestStreak}</Text>
      </View>

      {/* Daily Goal Reached */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Daily Goal Reached:</Text>
        <Text style={styles.statsText}>{statsData.dailyGoalPercentage}</Text>
      </View>

      {/* Steps Needed to Hit Goal */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Steps Needed to Hit Goal:</Text>
        <Text style={styles.statsText}>{statsData.stepsNeededToHitGoal}</Text>
      </View>

      {/* User Status */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>User Status:</Text>
        <Text style={styles.statsText}>{statsData.userStatus}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flexGrow: 1, // Allow ScrollView content to grow
    backgroundColor: "#8DB580", // Background color
    paddingTop: 60, // Padding at the top for spacing
    paddingHorizontal: 20, // Horizontal padding
    justifyContent: 'flex-start', // Align the sections at the top
    paddingBottom: 100, // Padding at the bottom
  },
  titleHeader: {
    fontSize: 50,
    color: "#F3F7F2", // Light color for the title
    fontFamily: "Amarante_400Regular", // Custom font
    textAlign: "center", // Center the title
    marginBottom: 20, // Add space below the title
  },
  sectionContainer: {
    marginBottom: 20, // Space between sections
    paddingVertical: 10, // Vertical padding inside each section
    backgroundColor: "#A8C091", // Background color for sections
    borderRadius: 8, // Rounded corners for each section
    paddingHorizontal: 15, // Horizontal padding inside each section
    alignItems: 'center', // Center the content inside each section
    width: 280, // Fixed width for each section (you can adjust this value)
    alignSelf: 'center', // Center each section horizontally
  },
  sectionHeader: {
    fontSize: 22,
    fontFamily: "Amarante_400Regular", // Custom font for section headers
    color: "#F3F7F2", // Light color for headers
    fontWeight: "bold", // Bold section headers
    marginBottom: 10, // Space below the section header
  },
  statsText: {
    fontSize: 18,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
    lineHeight: 26, // Line height for better readability
    textAlign: 'center', // Center the text inside the section
  },
});
