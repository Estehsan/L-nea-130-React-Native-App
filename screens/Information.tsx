import * as React from "react";
import { Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Text, View } from "../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
              {/* <Text
            style={{
              fontSize: 30,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Hello!
          </Text> */}
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
              </View>
            </View>
          </View>
          <View style={styles.cText}></View>
          <View style={styles.bcontainer}>
            <View style={styles.topbcontainer}>
              <View style={styles.menuContainer}>
                <AntDesign name="question" size={50} color="black" />

                <Text style={styles.activemenuText}>
                  ¿Qué es tu voz si cuenta?
                  {"\n"}
                  Somos el Programa de la Presidencia de la República que busca
                  orientar los esfuerzos de las instituciones del estado que
                  garanticen la transparencia en todas y cada una de las
                  acciones de los servidores públicos y regular la conducta
                  misma de quien busca una respuesta del empleado público,
                  garantizando así la práctica y cumplimiento del código de
                  ética del servidor público y crear la cultura de denuncia del
                  ciudadano.
                  {"\n"}
                  {"\n"}
                  Autoridades
                  {"\n"}
                  {"\n"}- Presidente de la República - Secretaría de
                  Coordinación General de Gobierno - Dirección de Transparencia,
                  Modernización y Reforma del Estado - Dirección General de
                  Servicio Civil - Comités de Ética de cada
                  {"\n"}
                  {"\n"}
                  ¿Qué es el proyecto?
                  {"\n"}
                  En cumplimiento del compromiso hecho por el Presidente de la
                  República ante el pueblo hondureño el día de su toma de
                  posesión en fortalecer las instituciones, revisar y certificar
                  la conducta funcional de los trabajadores públicos, establecer
                  los procedimientos adecuados para la práctica de la “denuncia
                  segura”, a cargo de cada institución, y para mayor seguridad
                  establecer un mecanismo de la “denuncia segura” en la propia
                  Presidencia de la República surgió el programa: Tu Voz Sí
                  Cuenta…para la Transparencia con el objetivo de lograr un
                  nivel eficiente de transparencia en las Instituciones del
                  Estado, para beneficio del Pueblo, impulsada desde la
                  Presidencia de la República y el acompañamiento del ciudadano
                  en la generación de una cultura de denuncia.
                  {"\n"}
                  Con este programa lograremos: generar confianza en los
                  funcionarios públicos, alcanzar la transparencia y la
                  agilización de los procesos, la utilización adecuada de
                  servicios y recursos del Estado, alcanzar la activa
                  participación del ciudadano para ejercer vigilancia sobre la
                  conducta de los empleados públicos, el efectivo cumplimiento
                  del código de conducta ética del servidor público, un mayor
                  entendimiento de los roles de los actores involucrados.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    height: "10%",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    paddingHorizontal: 20,
  },
  toptcontainer: {
    backgroundColor: "#3498db",
  },
  bcontainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    height: "100%",
    marginTop: 20,
    justifyContent: "center",
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

    height: "100%",
    padding: 30,
    width: "100%",
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
