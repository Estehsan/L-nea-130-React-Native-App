import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import Denuncias from "../screens/HomeScreens/Denuncias";
import Quejas from "../screens/HomeScreens/Quejas";
import Reclamos from "../screens/HomeScreens/Reclamos";
import Sugerencias from "../screens/HomeScreens/Sugerencias";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/Information";

import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
} from "../types";
import TabThreeScreen from "../screens/TabThreeScreen";
import { Linking, Text, TouchableOpacity, View } from "react-native";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={Colors[colorScheme].tint} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="questioncircleo"
              size={24}
              color={Colors[colorScheme].tint}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ color }) => (
            <AntDesign
              name="infocirlceo"
              color={Colors[colorScheme].tint}
              size={24}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      initialRouteName="TabOneScreen"
      screenOptions={{
        headerRight: () => (
          <View style={{ width: 40 }}>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:"130"`)}>
              <Feather name="phone-call" size={25} color="white" />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3498db",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "¿Qué desea Realizar?", headerShown: true }}
      />
      <TabOneStack.Screen
        name="Denuncias"
        component={Denuncias}
        options={{ headerTitle: "Denuncias", headerShown: true }}
      />
      <TabOneStack.Screen
        name="Quejas"
        component={Quejas}
        options={{ headerTitle: "Quejas", headerShown: true }}
      />
      <TabOneStack.Screen
        name="Sugerencias"
        component={Sugerencias}
        options={{ headerTitle: "Sugerencias", headerShown: true }}
      />
      <TabOneStack.Screen
        name="Reclamos"
        component={Reclamos}
        options={{ headerTitle: "Reclamos", headerShown: true }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerRight: () => (
          <View style={{ width: 40 }}>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:"130"`)}>
              <Feather name="phone-call" size={25} color="white" />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3498db",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Información" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerRight: () => (
          <View style={{ width: 40 }}>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:"130"`)}>
              <Feather name="phone-call" size={25} color="white" />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3498db",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <TabTwoStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: "Ayuda" }}
      />
    </TabTwoStack.Navigator>
  );
}
