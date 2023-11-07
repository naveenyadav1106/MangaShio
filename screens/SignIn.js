import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, gray, linkColor, white } from "../colors";
import TitleComponent from '../components/TitleComponent'
import Input from "../components/Input";
import Button from "../components/Button";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleLoginPress = () => {
    const { username, password, } = this.state;
    console.log('Login button pressed', { username, password });
    this.props.navigation.navigate('Home Page');
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TitleComponent />
        <View style={styles.innerContainer}>
          <Text style={styles.Title}>
            Sign in
          </Text>
          <Input
            label="Username/email"
            onChangeText={(text) => this.setState({ username: text })}
          />
          <View style={styles.UserContainer}>
            <Text style={styles.UserTitle}>
              New user?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
            >
              <Text
                style={[styles.UserTitle, { color: linkColor }]}
              >
                Register here
              </Text>
            </TouchableOpacity>
          </View>
          <Input
            label="Password"
            onChangeText={(text) => { this.setState({ password: text }) }}
          />

          <View style={styles.PasswordContainer}>
            <Text style={styles.UserTitle}>
              Remember me
            </Text>
            <TouchableOpacity>
              <Text
                style={[styles.UserTitle, { color: linkColor }]}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            BtnLabel="Log in"
            onPress={this.handleLoginPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 150,
    backgroundColor: black,
    alignItems: "center",
  },
  innerContainer: {
    marginTop: 30,
    paddingHorizontal: 12,
    alignItems: "center",
    backgroundColor: gray,
    width: "90%",
    height: 400,
    borderRadius: 3,
  },
  Title: {
    fontSize: 22.74,
    fontWeight: "700",
    color: white,
    marginTop: 15,
    marginBottom: 30,
  },
  UserContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
  },
  PasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  linkText: {
    color: linkColor,
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "400",
    marginVertical: 4,
  },
  UserTitle: {
    color: white,
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "400",
    marginTop: 5,
    marginBottom: 3,
  },
});
