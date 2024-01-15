import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, gray, linkColor, white } from "../colors";
import TitleComponent from '../components/TitleComponent';
import Input from "../components/Input";
import Button from "../components/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Firebase_Auth } from '../FirebaseConfig'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleRegisterPress = async () => {
    const { username, email, password, confirmPassword } = this.state;

    try {
      // Validate passwords
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      // Use Firebase authentication API to create a new user
      const userCredential = await createUserWithEmailAndPassword(Firebase_Auth, email, password);
      console.log('User registered successfully!', userCredential.user.uid);

      await AsyncStorage.setItem('username', username);

      // Navigate to the Home Page or any other screen upon successful registration
      this.props.navigation.navigate('Home Page');
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <>
        <View style={styles.container}>
          <TitleComponent />
          <View style={styles.innerContainer}>
            <Text style={styles.Title}>Register</Text>
            <Input
              label="Username"
              onChangeText={(text) => this.setState({ username: text })}
            />
            <Input
              label="Email"
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Input
              label="Password"
              onChangeText={(text) => this.setState({ password: text })}
            />
            <Input
              label="Confirm Password"
              onChangeText={(text) => this.setState({ confirmPassword: text })}
            />
            <View style={styles.ButtonContainer}>
              <Button
                BtnLabel="Register"
                onPress={this.handleRegisterPress}
              />
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.link}>Login page</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
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
