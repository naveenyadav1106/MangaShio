import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions, StatusBar } from 'react-native'

import { close, starImg, bookmark, yellowCircle } from '../assets'
import { white, lightGray } from '../colors'

import { SEARCH_ITEMS } from '../SearchData/SEARCH_ITEMS'
import Input from '../components/Input'

class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: SEARCH_ITEMS,
        };
    }

    SearchRenderer = ({ item }) => {
        const { image, title, bookmarks, rating, status } = item;

        return (
            <View style={styles.listContainer}>
                <Image
                    style={{ marginRight: 10 }}
                    source={image}
                />
                <View>
                    <Text style={{ fontWeight: '500', fontSize: 24, color: white }}>{title}</Text>
                    <View style={styles.infoContainer}>
                        <View style={styles.ratingContainer}>
                            <Image
                                source={starImg}
                            />
                            <Text style={{ fontWeight: '500', fontSize: 10, color: white }}>{rating}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Image
                                source={bookmark}
                            />
                            <Text style={{ fontWeight: '500', fontSize: 10, color: white }}>{bookmarks}</Text>
                        </View>
                    </View>
                    <View style={styles.statusContainer}>
                        <Image
                            style={{ marginRight: 5 }}
                            source={yellowCircle}
                        />
                        <Text style={styles.statusText}>{status}</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const win = Dimensions.get("window");
        const statusBarHeight = StatusBar.currentHeight || 0;
        return (
            <View style={[styles.container, { height: win.height, marginTop: statusBarHeight }]}>
                <View style={styles.searchContainer}>
                    <View
                        style={{ flexDirection: 'row', marginBottom: 22 }}
                    >
                        <Input
                            placeholder="Enter a search query..."
                            search={true}
                            inputStyles={styles.inputStyles}
                            outerContainer={{ flex: 0.98 }}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.props.onClose}
                    >
                        <Image
                            source={close}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{ width: '100%', marginTop: 8 }}
                    data={this.state.searchData}
                    renderItem={this.SearchRenderer}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: "rgba(31, 31, 31, 0.8)",
        paddingTop: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    searchContainer: {
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    inputStyles: {
        fontWeight: '400',
        fontSize: 14,
        fontFamily: 'Roboto',
    },
    listContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        backgroundColor: "rgba(217, 217, 217, 0.75)",
        marginBottom: 15,
        borderRadius: 4,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusContainer: {
        backgroundColor: lightGray,
        alignItems: 'center',
        flexDirection: 'row',
        width: 70,
        justifyContent: 'center',
        paddingRight: 10,
    },
    statusText: {
        fontWeight: '400',
        fontSize: 10,
        color: white,
        fontFamily: 'Roboto'
    }
})

export default SearchModal;