import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { white } from '../colors';
import { nextArrow } from '../assets';

class RowItems extends Component {
    renderItem = ({ item }) => {
        const { image, itemTitle } = item;
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.Img} source={image} />
                <Text style={styles.imageText}>{itemTitle}</Text>
            </View>
        );
    };

    render() {
        const { title, data } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.Title}>{title}</Text>
                    <Image source={nextArrow} />
                </View>
                <FlatList data={data} renderItem={this.renderItem} horizontal />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    Title: {
        color: white,
        fontWeight: '500',
        fontSize: 16.73,
    },
    imageContainer: {
        width: 120,
        alignItems: 'flex-start',
        marginRight: 16,
    },
    Img: {
        width: 120,
        height: 160,
        resizeMode: 'cover',
    },
    imageText: {
        color: white,
        fontSize: 11.27,
        fontWeight: '500',
        marginLeft: 5,
        width: 110,
    },
});

export default RowItems;
