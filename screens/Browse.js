import React, { Component } from 'react'

import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import { StatusBar } from 'react-native'

import { ITEMS } from '../BrowseData/Browse_data'

import { starImg, bookmark } from '../assets'
import { black, white, gray, lightGray, ongoingColor } from '../colors'

import SearchModal from '../components/SearchModal'
import Input from '../components/Input'
import Header from '../components/Header'


export default class Browse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchmodalVisible: false,
            BrowseData: ITEMS,
        }
    }

    toggleSearchModal = () => {
        this.setState((prevState) => ({
            searchmodalVisible: !prevState.searchmodalVisible,
        }));
    }

    renderItem = ({ item }) => {
        return (
            <View
                style={styles.renderContainer}
                key={item.title}
            >
                <View
                    style={styles.ImageContainer}
                >
                    <Image
                        source={item.image}
                        style={styles.Image}
                    />
                    <View
                        style={styles.ratingContainer}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={starImg} />
                            <Text
                                style={styles.ratingText}
                            >
                                {item.stars}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={bookmark} />
                            <Text
                                style={styles.ratingText}
                            >
                                {item.bookmarks}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={styles.OngoingContainer}
                >
                    <View
                        style={styles.ongoing}

                    >
                        <View
                            style={{
                                backgroundColor: ongoingColor,
                                width: 5.1,
                                height: 5.1,
                                borderRadius: 100,
                                marginRight: 2,
                            }}
                        ></View>
                        <Text
                            style={styles.status}
                        >
                            {item.status}
                        </Text>
                    </View>
                    <Text
                        style={styles.title}
                    >
                        {item.title}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 5,
                            marginBottom: 5,
                        }}
                    >
                        {item.tags.map((tag, index) => (
                            <Text
                                style={styles.tag}
                                key={index + tag}
                            >
                                {tag}
                            </Text>
                        ))}
                    </View>
                    <Text
                        style={styles.description}
                    >
                        {item.description}
                    </Text>
                </View>
            </View>
        )
    }

    render() {
        const { navigation } = this.props;
        const statusbarheight = StatusBar.currentHeight || 0;
        return (
            <View style={[styles.container, { paddingTop: statusbarheight }]}>
                {this.state.searchmodalVisible && <SearchModal onClose={this.toggleSearchModal} />}
                <Header
                    onHome={() => navigation.navigate('Home Page')}
                    onAccount={() => navigation.navigate('Account Details')}
                    onSearch={this.toggleSearchModal}
                    onHamburger={() => navigation.navigate('Temporary Drawer')}
                />
                <Text style={styles.PageTitle}>Browse</Text>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Advance Search"
                        outerContainer={{ flex: 0.7 }}
                    />
                    <View style={styles.dropdown}>
                        <Text style={{ fontSize: 7, color: white, fontWeight: '400', fontFamily: 'Roboto', marginBottom: 2 }}>Sort By</Text>
                        <Text style={{ fontSize: 10, color: white, fontWeight: '700', fontFamily: 'Roboto' }}>Best Match</Text>
                    </View>
                </View>
                <FlatList
                    style={{ width: "96%", marginTop: 20 }}
                    data={this.state.BrowseData}
                    renderItem={this.renderItem}
                    row
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: black,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    PageTitle: {
        color: white,
        fontFamily: 'Roboto',
        fontWeight: '800',
        fontSize: 32,
        alignSelf: 'flex-start',
        paddingLeft: 15,
        marginBottom: 10,
        marginTop: 6,
    },
    renderContainer: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingBottom: 15,
        backgroundColor: gray,
        borderRadius: 4,
        marginBottom: 10,
    },
    ImageContainer: {
        paddingTop: 10,
        width: 80,
        alignItems: "center",
    },
    Image: {
        width: 74,
        height: 103,
        resizeMode: "cover",
        borderRadius: 2.5,
    },
    ratingContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        width: 75,
    },
    ratingText: {
        fontSize: 10,
        color: white,
        fontWeight: "400",
        fontFamily: "Roboto",
    },
    OngoingContainer: {
        marginLeft: 6,
        paddingRight: 5,
        flex: 1,
        marginVertical: 10,
    },
    ongoing: {
        flexDirection: "row",
        alignSelf: "flex-end",
        backgroundColor: lightGray,
        borderRadius: 3.4,
        paddingHorizontal: 5,
        alignItems: "center",
        marginBottom: -5,
    },
    status: {
        fontSize: 7,
        color: white,
        fontWeight: "700",
        fontFamily: "Roboto",
    },
    title: {
        fontSize: 19,
        fontWeight: "700",
        color: white,
        fontFamily: "Roboto",
    },
    tag: {
        fontSize: 8,
        fontWeight: "700",
        backgroundColor: "red",
        color: white,
        fontFamily: "Roboto",

        paddingHorizontal: 5,
        borderRadius: 8,
        marginRight: 10,
    },
    description: {
        fontSize: 8,
        fontWeight: "400",
        color: white,
        fontFamily: "Roboto",
        textAlign: "justify",
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
    },
    dropdown: {
        height: 30,
        flex: 0.3,
        marginLeft: 10,
        marginTop: 27,
    },
})