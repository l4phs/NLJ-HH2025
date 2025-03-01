import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleHeader}>Panda Progress</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, // Use flex instead of fixed height
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#95B299",
  },
  titleHeader: {
    fontSize: 38,
    color: "white",
  },
});
