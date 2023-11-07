import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { blue, white } from "../colors";

export default class Button extends Component {
    render() {
        const { BtnLabel } = this.props;
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>{BtnLabel}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        backgroundColor: blue,
        width: 362,
        height: 34,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        width: '100%',
    },
    title: {
        color: white,
        fontWeight: "600",
        fontSize: 20,
        fontFamily: "Roboto",
    }
});
