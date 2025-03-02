import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";
import { Image } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function SettingsScreen() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Amarante_400Regular, // Load Amarante font
  });

  // States for storing the input values
  const [stepsGoal, setSteps] = useState("");  
  const [exerciseGoal, setExercise] = useState(""); 
  const [sleepTimeGoal, setSleepTime] = useState(""); 
  const [calorieBurnGoal, setCalories] = useState(""); 
  const [destressGoal, setDestress] = useState(""); 

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Prevent rendering UI before fonts load
  }

  // Handle changes for the step input field
  const handleStepsChange = (text: string) => {
    if (/^\d*$/.test(text)) { 
      setSteps(text); 
    }
  };

  // Handle changes for the exercise input field
  const handleExerciseChange = (text: string) => {
    if (/^\d*$/.test(text)) { 
      setExercise(text); 
    }
  };

  // Handle changes for the sleep input field
  const handleSleepChange = (text: string) => {
    if (/^\d*$/.test(text)) { 
      setSleepTime(text); 
    }
  };

  // Handle changes for the calorie input field
  const handleCalorieChange = (text: string) => {
    if (/^\d*$/.test(text)) { 
      setCalories(text); 
    }
  };

    // Handle changes for the calorie input field
    const handleDestressChange = (text: string) => {
      if (/^\d*$/.test(text)) { 
        setDestress(text); 
      }
    };

  // Define the file path in the app's document directory
  const fileUri = FileSystem.documentDirectory + 'fitnessGoals.csv';

  // Handle the submit action (to save or log goals)
  const handleSubmit = async () => {
    try {
      // Create an array of the input values
      const goalsArray = [["steps", "exercise", "sleep", "calorie", "destress"], //header row
         [stepsGoal, exerciseGoal, sleepTimeGoal, calorieBurnGoal, destressGoal] //data row
      ];

      // Log the array of goals to the console
      console.log("Goals Data:", goalsArray);

      // You can also log each goal individually if you prefer
      console.log("Steps Goal:", stepsGoal);
      console.log("Exercise Goal:", exerciseGoal);
      console.log("Sleep Time Goal:", sleepTimeGoal);
      console.log("Calorie Burn Goal:", calorieBurnGoal);

      // Convert array to CSV string
      const csvData = goalsArray.map(row => row.join(',')).join('\n');

      // Save CSV to file
      await saveCSVToFile(csvData);
    } catch (error) {
      console.error("Error saving data:", error);
      Alert.alert("Error", "Something went wrong while saving your goals.");
    }
  };

  // Function to save the CSV to the file system
  const saveCSVToFile = async (csvString: string) => {
    try {
      const fileUri = FileSystem.documentDirectory + "fitnessGoals.csv";
      // Write the CSV string to a file
      await FileSystem.writeAsStringAsync(fileUri, csvString, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      console.log("CSV file saved successfully!");
      Alert.alert("Success", "Your goals have been saved!");
      console.log(fileUri);
    } catch (error) {
      console.error("Error saving CSV file:", error);
      Alert.alert("Error", "Failed to save your goals to a file.");
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.titleHeader}>Set Your Daily Goals</Text>
      <Image source={require('@/assets/images/Bamboo4Horizontal.png')} style={styles.bambooBar} />
      
      <Text style={styles.contentCss}>Current Step Goal: {stepsGoal}</Text>
      {/* Text Input for steps goal */}
      <TextInput
        style={styles.input}
        placeholder="Enter your step goal"
        placeholderTextColor="gray"
        value={stepsGoal}  
        onChangeText={handleStepsChange}  
        keyboardType="numeric" 
        maxLength={6} 
      />
      
      <Text style={styles.contentCss}>Current Exercise Goal: {exerciseGoal}</Text>
      {/* Text Input for exercise goal */}
      <TextInput
        style={styles.input}
        placeholder="Enter your exercise goal (in minutes)"
        placeholderTextColor="gray"
        value={exerciseGoal}  
        onChangeText={handleExerciseChange}  
        keyboardType="numeric" 
        maxLength={3} 
      />
      
      <Text style={styles.contentCss}>Current Sleep Goal: {sleepTimeGoal}</Text>
      {/* Text Input for sleep goal */}
      <TextInput
        style={styles.input}
        placeholder="Enter your sleep goal (in hours)"
        placeholderTextColor="gray"
        value={sleepTimeGoal}  
        onChangeText={handleSleepChange}  
        keyboardType="numeric" 
        maxLength={2} 
      />

      <Text style={styles.contentCss}>Current Calorie Goal: {calorieBurnGoal}</Text>
      {/* Text Input for calories burned goal */}
      <TextInput
        style={styles.input}
        placeholder="Enter your calories burned goal"
        placeholderTextColor="gray"
        value={calorieBurnGoal}  
        onChangeText={handleCalorieChange}  
        keyboardType="numeric" 
        maxLength={5} 
      />
<Text style={styles.contentCss}>Current Destress Goal: {destressGoal}</Text>
           {/* Text Input for destress goal */}
           <TextInput
        style={styles.input}
        placeholder="Enter your destress goal (in minutes)"
        placeholderTextColor="gray"
        value={destressGoal}  
        onChangeText={handleDestressChange}  
        keyboardType="numeric" 
        maxLength={3} 
      />
      
      {/* Submit Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20, 
    backgroundColor: "#8DB580", 
  },
  titleHeader: {
    fontSize: 50,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
    marginBottom: -260, 
  },
  contentCss: {
    fontSize: 26,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
  },
  input: {
    height: 50, 
    borderColor: "#ccc",
    borderWidth: 1,
    width: "60%", 
    marginVertical: 20,
    paddingHorizontal: 10,
    fontSize: 30,
    backgroundColor: "#fff",
    fontFamily: "Times",
    textAlign: 'center',
    borderRadius: 100, 
  },
  bambooBar: {
    marginBottom: -250,
    marginRight: 90,
    height: "55%",
    width: "70%"
  },
  saveButton: {
    height: 50, 
    borderColor: "#ccc",
    borderWidth: 1,
    width: "20%", 
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 1,
    backgroundColor: "#546c4c",
    borderRadius: 100, 
  },
  buttonText:{
    fontSize: 30,
    color: "#fff",
    fontFamily: "Times",
    textAlign: 'center'
  }
});
