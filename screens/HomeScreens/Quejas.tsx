import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { Text, View } from "../../components/Themed";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import Colors from "./../../constants/Colors";

export default class Quejas extends Component {
  displayError() {
    Alert.alert(
      "Disculpe.",
      "Actualmente usted no tiene internet. Intente en otro momento. Gracias",
      [{ text: "OK", onPress: () => this.props.navigation.goBack() }],
      { cancelable: false }
    );
  }
  render() {
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
                source={require("./../../assets/images/logo.png")}
                style={{ width: 150, height: 150 }}
              />
              {/* <Text
                style={{
                  fontSize: 25,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Que Desea Realizar?
              </Text> */}
            </View>
          </View>
        </View>

        <View style={styles.cText}>
          <Text></Text>
        </View>
        <WebView
          onError={() => this.displayError()}
          source={{
            uri: "http://www.tuvozsicuenta.gob.hn/?page_id=654&req=Queja",
          }}
        />
      </View>
    );
  }
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
