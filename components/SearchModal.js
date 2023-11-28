import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions, StatusBar, Pressable } from 'react-native'

import { close, starImg, bookmark, yellowCircle } from '../assets'
import { white, lightGray } from '../colors'

import { SEARCH_ITEMS } from '../SearchData/SEARCH_ITEMS'
import Input from '../components/Input'

class SearchModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: SEARCH_ITEMS,
            searchQuery: " ",
        };
    }

    navigateTo = () => {
        this.props.navigateToMangaDetails()
    }

    SearchRenderer = ({ item }) => {
        const { image, title, bookmarks, rating, status } = item;

        return (
            <Pressable
                onPress={this.navigateTo}
                android_ripple={{ color: '#ccc' }}
                style={styles.listContainer}>
                <Image
                    style={{ marginRight: 10 }}
                    source={image}
                />
                <View>
                    <Text style={{ fontWeight: '500', fontSize: 24, color: white, marginBottom: 3 }}>{title}</Text>
                    <View style={styles.infoContainer}>
                        <View style={styles.ratingContainer}>
                            <Image
                                style={{ marginRight: 1 }}
                                source={starImg}
                            />
                            <Text style={{ fontWeight: '500', fontSize: 10, color: white, marginRight: 10 }}>{rating}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Image
                                style={{ marginRight: 1 }}
                                source={bookmark}
                            />
                            <Text style={{ fontWeight: '500', fontSize: 10, color: white, marginRight: 10 }}>{bookmarks}</Text>
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
            </Pressable>
        )
    }

    handleSearchQuery = (text) => {
        const filterData = SEARCH_ITEMS.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        this.setState({
            searchQuery: text,
            searchData: filterData,
        })
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
                            value={this.state.searchQuery}
                            onChangeText={(text) => this.handleSearchQuery(text)}
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
                {this.state.searchData.length === 0 ? (
                    <Text style={styles.Noresult}>No results found</Text>
                ) : (
                    <FlatList
                        style={{ width: '100%', marginTop: 8 }}
                        data={this.state.searchData}
                        renderItem={this.SearchRenderer}
                    />
                )
                }
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
        alignItems: 'center',
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    Noresult: {
        color: white,
    }
})

export default SearchModal;