import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { hamburger, logo, searchImg, account } from '../assets'
import { white } from '../colors'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableOpacity    >
                    <Image
                        source={hamburger}
                    />
                </TouchableOpacity>

                <Image
                    source={logo}
                    style={styles.img}
                />
                <Text style={styles.Title}>
                    MangaShio
                </Text>
            </View>
            <View style={styles.innerContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.searchImg}
                        source={searchImg}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={account}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        paddingTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        alignItems: 'center'
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
        fontWeight: "800",
    },
    searchImg: {
        marginRight: 10,
    }
})