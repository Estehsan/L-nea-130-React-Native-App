import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.tcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            width: "100%",
            backgroundColor: "#00a46c",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Hello!
          </Text>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(0,164,109,0.4)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -45,
        }}
      ></LinearGradient>
      <View style={styles.cText}>
        <Text>Hello</Text>
      </View>
      <View style={styles.bcontainer}>
        <View style={styles.topbcontainer}>
          <View style={styles.activemenu}>
            <Entypo name="sound" size={50} color="#FFFFFF" />
            <Text style={styles.aText}>Denuncias</Text>
          </View>
          <View style={styles.menuContainer}>
            <Feather name="alert-circle" size={50} color="black" />
            <Text style={styles.activemenuText}>Quejas</Text>
          </View>
        </View>
        <View style={styles.bottombcontainer}>
          <View style={styles.menuContainer}>
            <Feather name="file" size={50} color="black" />
            <Text style={styles.activemenuText}>Reclamos</Text>
          </View>
          <View style={styles.menuContainer}>
            <FontAwesome5 name="lightbulb" size={50} color="black" />
            <Text style={styles.activemenuText}>Sugerencias</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  cText: {},
  tcontainer: {
    backgroundColor: "#00a46c",
    height: "30%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  toptcontainer: {
    backgroundColor: "#00a46c",
    flex: 1,
  },
  bcontainer: {
    flex: 1,

    flexDirection: "column",
  },
  topbcontainer: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottombcontainer: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-around",
  },
  menuContainer: {
    justifyContent: "center",
    alignItems: "center",

    height: "80%",
    width: "45%",
    backgroundColor: "#F6F6F6",
    borderRadius: 26,
  },
  activemenu: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: "45%",
    backgroundColor: "#17C37B",
    borderRadius: 26,
  },
  activemenuText: {
    fontSize: 20,
    color: "#000000",
    marginTop: 5,
  },
  aText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 5,
  },
});
