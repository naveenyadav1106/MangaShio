import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { lightGray, white } from "../colors";

export default class Input extends Component {
  render() {
    const { label } = this.props;
    return (
      <View style={styles.outerContainer}>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.TextInput}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
  },
  container: {
    width: "100%",
    height: 34,
    borderRadius: 4,
    backgroundColor: lightGray,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 1,
    marginBottom: 3,
  },
  TextInput: {
    height: "100%",
  },
  title: {
    fontSize: 13.13,
    color: white,
    fontWeight: "400",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});
