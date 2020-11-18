import * as React from "react";
import { StyleSheet, TouchableWithoutFeedback, Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/Colors";
export default function TabOneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            width: "100%",
            backgroundColor: "#3498db",
          }}
        >
          <View
            style={{
              alignContent: "center",
              width: "100%",
              backgroundColor: Colors.light,
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../assets/images/logo.png")}
              style={{ width: 150, height: 150 }}
            />
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Que Desea Realizar?
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.cText}>
        <Text></Text>
      </View>
      <View style={styles.bcontainer}>
        <View style={styles.topbcontainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Denuncias")}
          >
            <View style={styles.activemenu}>
              <Entypo name="sound" size={50} color="#FFFFFF" />
              <Text style={styles.aText}>Denuncias</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Quejas")}
          >
            <View style={styles.menuContainer}>
              <Feather name="alert-circle" size={50} color="black" />
              <Text style={styles.activemenuText}>Quejas</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.bottombcontainer}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Reclamos")}
          >
            <View style={styles.menuContainer}>
              <Feather name="file" size={50} color="black" />
              <Text style={styles.activemenuText}>Reclamos</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Sugerencias")}
          >
            <View style={styles.menuContainer}>
              <FontAwesome5 name="lightbulb" size={50} color="black" />
              <Text style={styles.activemenuText}>Sugerencias</Text>
            </View>
          </TouchableWithoutFeedback>
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
    backgroundColor: "#3498db",
    height: "30%",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    paddingHorizontal: 20,
  },
  toptcontainer: {
    backgroundColor: "#3498db",
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
    backgroundColor: "#3498db",
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
