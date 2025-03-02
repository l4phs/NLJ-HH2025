import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Amarante_400Regular } from "@expo-google-fonts/amarante";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { relative } from "path";

// Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function Index() {

  const [healthScore, setHealthScore] = useState("0.00");
  const [bambooWidth, setBambooWidth] = useState("0.00");
  const [pandaPic, setPandaPic] = useState("0.00");
  const [num, setNum] = useState(0.00);
  const [index, setIndex] = useState(0); // Track the current index in the array

  // Track the opacity for each bamboo image
  const [opacityBamboo1, setOpacityBamboo1] = useState(0);
  const [opacityBamboo2, setOpacityBamboo2] = useState(0);
  const [opacityBamboo3, setOpacityBamboo3] = useState(0);
  const [opacityBamboo4, setOpacityBamboo4] = useState(0);
  const [opacityBamboo5, setOpacityBamboo5] = useState(0);

  //panda opacity
  const [opacityPanda1, setOpacityPanda1] = useState(1);
  const [opacityPanda2, setOpacityPanda2] = useState(0);
  const [opacityPanda3, setOpacityPanda3] = useState(0);

  // Array of possible health scores
  const scoresArray = ["35.54", "64.79", "100.00", "0.00"];
  const numScores = [35.54, 64.79, 100.00, 0.00];

  //const pandaPicArray = ["", "", ""];

  // Function to update health score on button press
  const updateHealthTitle = () => {
    console.log("button pressed");

    // Update the health score based on the current index
    setHealthScore(scoresArray[index]);
    console.log(scoresArray[index]);
    setNum(numScores[index]);
    changeBamboo(numScores[index]);
    changePanda(numScores[index]);
    //setPandaPic(pandaPicArray[index]);

    // Increment index and reset if it goes out of bounds
    setIndex((prevIndex) => (prevIndex + 1) % scoresArray.length);
    //setIndex((prevIndex) => (prevIndex + 1) % numScores.length);
    //setIndex((prevIndex) => (prevIndex + 1) % pandaPicArray.length);

    console.log("updated");
    return null;

  };

  // Change the opacity of bamboo images based on health score
  const changeBamboo = (health: number) => {
    if (health === 0.00) {
      setOpacityBamboo1(0);
      setOpacityBamboo2(0);
      setOpacityBamboo3(0);
      setOpacityBamboo4(0);
      setOpacityBamboo5(0);
    } else if (health === 35.54) {
      setOpacityBamboo1(1);
      setOpacityBamboo2(0);
      setOpacityBamboo3(0);
      setOpacityBamboo4(0);
      setOpacityBamboo5(0);
    } else if (health === 64.79) {
      setOpacityBamboo1(0);
      setOpacityBamboo2(0);
      setOpacityBamboo3(1);
      setOpacityBamboo4(0);
      setOpacityBamboo5(0);
    } else if (health === 100.00) {
      setOpacityBamboo1(0);
      setOpacityBamboo2(0);
      setOpacityBamboo3(0);
      setOpacityBamboo4(0);
      setOpacityBamboo5(1);
    }
    return null;
  };

  const changePanda = (health: number) => {
    if ((health == 0.00)) {
      setOpacityPanda1(1);
      setOpacityPanda2(0);
      setOpacityPanda3(0);
      console.log("cry");
    }
    else if (health == 35.54) {
      setOpacityPanda1(0);
      setOpacityPanda2(1);
      setOpacityPanda3(0);
      console.log("smile");
    }
    else if ((health == 64.79) || (health == 100.00)) {
      setOpacityPanda1(0);
      setOpacityPanda2(0);
      setOpacityPanda3(1);
      console.log("happy");
    }
    return null;
  }

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.screenContainer}>
        <Text style={styles.titleHeader}>Panda Progress</Text>
        <TouchableOpacity style={styles.button} onPress={updateHealthTitle}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>
        {/* Display panda image */}
        <View style={styles.pandacontainer}>
        <Image id="panda1" source={require('@/assets/images/PandaCRY.png')} style={[styles.image, { opacity: opacityPanda1 }]} />
        <Image id="panda2" source={require('@/assets/images/PandaOG.png')} style={[styles.image1, { opacity: opacityPanda2 }]} />
        <Image id="panda3" source={require('@/assets/images/PandaNormal.png')} style={[styles.image2, { opacity: opacityPanda3 }]} />
        </View>
        <View style={styles.container1} >
          <Text style={styles.smallFont}>Panda Health: {healthScore}</Text>
          <View style={styles.container}>
            {/* <View style={styles.statusbar}></View> */}
            {/* Bamboo images with opacity controlled by the state */}
            <Image id="bamboo1" source={require("@/assets/images/Bamboo1Horizontal.png")} style={[styles.bambooBar, { opacity: opacityBamboo1 }]} />
            <Image id="bamboo2" source={require("@/assets/images/Bamboo2Horizontal.png")} style={[styles.bambooBar1, { opacity: opacityBamboo2 }]} />
            <Image id="bamboo3" source={require("@/assets/images/Bamboo3Horizontal.png")} style={[styles.bambooBar2, { opacity: opacityBamboo3 }]} />
            <Image id="bamboo4" source={require("@/assets/images/Bamboo4Horizontal.png")} style={[styles.bambooBar3, { opacity: opacityBamboo4 }]} />
            <Image id="bamboo5" source={require("@/assets/images/Bamboo5Horizontal.png")} style={[styles.bambooBar4, { opacity: opacityBamboo5 }]} />
          </View>
        </View>
      </View>
    </GestureHandlerRootView></ScrollView>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "#8DB580",
    paddingTop: "10%",
  },

  titleHeader: {
    fontSize: 50,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
    //marginBottom: 30,
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: "rgba(34, 51, 31, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: "60%",
  },

  buttonText: {
    fontFamily: "Amarante_400Regular",
    fontSize: 20,
    color: "#F3F7F2",
  },
  pandacontainer:{
    height: 400,
    width:"100%",
    backgroundColor: "purple",
    position: "relative",
    zIndex: 1,
  },
    image: {
    width: "100%",
    height: "100%",
    zIndex: 2,
    // backgroundColor: "orange",
  },

  image1: {
    width: "100%",
    height: "100%",
    zIndex: 2,
    // backgroundColor: "green",
    position: "absolute",
  }, 
   image2: {
    width: "100%",
    height: "100%",
    zIndex: 2,
    // backgroundColor: "blue",
    position: "absolute",

  },
  smallFont: {
    fontSize: 24,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
    textAlign: "center",
    marginBottom: 10,
    marginTop: "0%",
  },

  container: {
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
    width: "100%",
    top:"10",
    height: 200,
    // backgroundColor: "purple",
    left: "-315",
    position: "absolute",
  },
  pandacontainer: {
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "370%",
    // marginTop: "5%",
    // backgroundColor: "red",

  },

  bambooBar: {
    height: "40%",
    width: "100%",
    marginRight: "90%",
    zIndex: 2,
    position: "absolute",
  },

  bambooBar1: {
    height: "40%",
    width: "100%",
    marginRight: "90%",
    zIndex: 3,
    left: "0%",
    position: "absolute",
  },
  bambooBar2: {
    height: "40%",
    width: "100%",
    marginRight:"90%",
    zIndex: 4,
    left: "0%",
    position: "absolute",
  },
  bambooBar3: {
    height: "40%",
    width: "100%",
    zIndex: 5,
    position: "absolute",
    marginTop: "20%",
  },
  bambooBar4: {
    height: "29%",
    width: "100%",
    marginRight: 0,
    zIndex: 6,
    left: "-0.5%",
    position: "absolute",
  },
  statusbar: {
    height: "10%",
    backgroundColor: "#8DB580",
    position: "relative",
  },

});
/*
const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: "10%",
    alignItems: "center",
    backgroundColor: "#8DB580",
    height: "100%",
  },
  container1:{
    height: 600,

  },

  titleHeader: {
    fontSize: 44,
    color: "#F3F7F2",
    fontFamily: "Amarante_400Regular",
  },
  image: {
    width: "100%",
    height: "30%",
    //marginBottom: "-30%",
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
    height: "30%",
    backgroundColor: "#8DB580",
    position: "absolute",
  },
  bambooBar: {
    height: "40%",
    width: "100%",
    marginRight: 0,
    zIndex: 1,
    left: "0%",
  },
  button: {
    marginTop: 4,
    width: "14%",
    height: "4%",
    borderRadius: 10,
    backgroundColor: "rgba(34, 51, 31, 0.3)",
    left: "34%",
    marginBottom: -15,
  },
  buttonText: {
    fontFamily: "Amarante_400Regular",
    fontSize: 24,
    color: "#F3F7F2",
    padding: "5%",
    marginLeft: 10,
  },
  container: {
    height: "20%",
    width: "100%",
    position: "relative",
  },
  bambooBar1: {
    height: "40%",
    width: "100%",
    marginRight: 0,
    zIndex: 2,
    left: "0%",
    position: "absolute",
  },
  bambooBar2: {
    height: "40%",
    width: "100%",
    marginRight: 0,
    zIndex: 2,
    left: "0%",
    position: "absolute",
  },
  bambooBar3: {
    height: "40%",
    width: "100%",
    marginRight: 0,
    zIndex: 2,
    left: "-10%",
    position: "absolute",
    marginTop: "-20%",
  },
  bambooBar4: {
    height: "29%",
    width: "100%",
    marginRight: 0,
    zIndex: 2,
    left: "-0.5%",
    position: "absolute",
  },

});
*/
