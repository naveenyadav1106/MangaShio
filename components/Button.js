import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { blue, white } from "../colors";

export default class Button extends Component {
    render() {
        const { BtnLabel } = this.props;
        const { onPress } = this.props;
        const { btnStyles } = this.props;
        const { TextStyles } = this.props;
        return (
            <TouchableOpacity
                style={{ ...styles.button, ...btnStyles }}
                onPress={onPress}
            >
                <Text style={{ ...styles.title, ...TextStyles }}>{BtnLabel}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 362,
        flexDirection: "row",
        backgroundColor: blue,
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
