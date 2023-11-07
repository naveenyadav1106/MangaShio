import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, gray, linkColor, white } from "../colors";
import TitleComponent from '../components/TitleComponent'
import Input from "../components/Input";
import Button from "../components/Button";

export default class Register extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TitleComponent />
        <View style={styles.innerContainer}>
          <Text style={styles.Title}>Register</Text>
          <Input label="Username" />
          <Input label="Email" />
          <Input label="Password" />
          <Input label="Confirm Password" />
          <View style={styles.ButtonContainer}>
            <Button BtnLabel="Register" />
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.link}>Login page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: "40%",
    backgroundColor: black,
    alignItems: "center",
  },
  innerContainer: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: gray,
    width: "90%",
    paddingHorizontal: 10,
    height: "68%",
    borderRadius: 5,
  },
  ButtonContainer: {
    width: "100%",
    alignItems: "center",
  },
  Title: {
    color: white,
    fontSize: 22.74,
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 5,
  },
  link: {
    color: linkColor,
    fontFamily: "Roboto",
    fontSize: 12,
    marginVertical: 5,
    fontWeight: "400",
  },
});
