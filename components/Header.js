import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { white } from '../colors';
import { hamburger, logo, searchImg, account } from '../assets';

class Header extends Component {
    render() {
        const {
            onHamburger,
            onAccount,
            onSearch,
            onHome
        } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={onHamburger}>
                        <Image source={hamburger} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onHome}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Image source={logo} style={styles.img} />
                        <Text style={styles.Title}>MangaShio</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={onSearch}>
                        <Image style={styles.searchImg} source={searchImg} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onAccount}>
                        <Image source={account} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 30,
        height: 30,
        marginLeft: 11,
    },
    Title: {
        marginLeft: 5,
        fontSize: 15,
        color: white,
        fontWeight: '800',
    },
    searchImg: {
        marginRight: 10,
    },
});

export default Header;
