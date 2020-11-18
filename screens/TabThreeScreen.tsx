import * as React from "react";
import { Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { Text, View } from "../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function TabThreeScreen() {
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
                <Feather name="info" size={50} color="black" />
                <Text style={styles.activemenuText}>
                  ¿Mi denuncia contará con confidencialidad? Las denuncias son
                  completamente anónimas. El denunciante tiene la elección de no
                  proporcionar su nombre, y en el caso de identificarse, los
                  datos personales no serán enviados a la institución que
                  corresponda por el acto denunciado, si no que la denuncia será
                  conocida y procesada por un número de referencia.
                  {"\n"}
                  ¿Cuáles son los horarios de atención? {"\n"}
                  El horario de atención del Centro de Llamadas de la Línea 130
                  es de lunes a viernes de 7:00 a.m. a 5:00 p.m.
                  {"\n"}
                  ¿Para qué sirve la línea 130?
                  {"\n"}
                  La línea 130 es una herramienta disponible a la población
                  hondureña, para interponer denuncias sobre los actos de
                  corrupción de cualquier servidor público. También para recibir
                  quejas o sugerencias que el ciudadano estime a bien realizar.
                  {"\n"}
                  ¿Cómo puedo acreditar documentos o pruebas que respalden mi
                  denuncia?
                  {"\n"}El denunciante tiene la opción de adjuntar archivos por
                  medio de la página web para acreditar medios de prueba al acto
                  denunciado. Ingrese a www.tuvozsicuenta.gob.hn. En la pantalla
                  principal presione la opción “Monitorea Tu Denuncia”, ubicada
                  al lado superior derecho. Al accesar a la plataforma, ingrese
                  el usuario y contraseña que se le asignó al momento que llamó
                  y se desplegará el detalle de su(s) denuncia(s) interpuesta
                  (s). Ingrese a la denuncia a la que desea agregar archivos,
                  seleccionando la opción “Contestar”. Se abrirá una pantalla
                  similar a la de un nuevo correo electrónico; oprima el botón
                  de adjuntar archivo.
                  {"\n"}
                  ¿A qué instituciones gubernamentales se remiten las denuncias,
                  quejas o sugerencias que reciben?
                  {"\n"}
                  Si la denuncia involucra, directa o indirectamente, a un
                  funcionario de Alto o mediano rango jerárquico de la
                  institución, se relaciona a temas de carácter sensitivo para
                  la nación, u otros, esta será elevada al Comité Asesor
                  Interinstitucional (CAIT) para su conocimiento y respuesta.
                  Caso contrario, será trasladada a la institución pertinente.
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
    height: "7%",
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
