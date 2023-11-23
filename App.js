// import 'react-native-gesture-handler';

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "./screens/SignIn";
import Register from "./screens/Register";
import HomePage from "./screens/HomePage";
import AccountDetails from "./screens/AccountDetails";
import TemporaryDrawer from "./screens/TemporaryDrawer";
import Library from './screens/Library'
import Browse from './screens/Browse'
import MangaDetails from "./screens/MangaDetails";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.Stack = createNativeStackNavigator();
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
            <this.Stack.Screen
              name="Home Page"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <this.Stack.Screen
              name="Account Details"
              component={AccountDetails}
              options={{ headerShown: false }}
            />
            <this.Stack.Screen
              name="Temporary Drawer"
              component={TemporaryDrawer}
              options={{ headerShown: false }}
            />
            <this.Stack.Screen
              name="Browse"
              component={Browse}
              options={{ headerShown: false }}
            />
            <this.Stack.Screen
              name="Library"
              component={Library}
              options={{ headerShown: false }}
            />
            <this.Stack.Screen
              name="Manga Details"
              component={MangaDetails}
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
