import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Register from "./screens/Register";
import SignIn from "./screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.Stack = createNativeStackNavigator();
    this.Drawer = createDrawerNavigator();
  }

  render() {
    return (
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <this.Stack.Navigator>
            <this.Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <this.Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
          </this.Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
