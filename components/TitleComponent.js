import React, { Component } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { logo } from "../assets";
import { white } from "../colors";

export default class TitleComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} />
                <Text style={styles.title}>Mangashio</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        color: white,
        fontSize: 24.36,
        marginLeft: 10,
        fontWeight: "800",
    }
});