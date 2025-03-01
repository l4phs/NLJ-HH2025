import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function DailyScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleHeader}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#95B299",
  },
  titleHeader: {
    fontSize: 38,
    color: "white",
  },
});
