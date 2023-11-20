import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/Header'
import { TABS_DATA } from '../Library_data/Library_data'
import { black, white, lightGray, purple, gray, ongoingColor } from '../colors'
import { StatusBar } from 'react-native'
import SearchModal from '../components/SearchModal'
import { starImg, bookmark, yellowCircle } from '../assets'

export default class Library extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchmodalVisible: false,
            tabs: TABS_DATA,
            selectedKey: "Reading"
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

    renderTabsPanel = () => {
        return (
            <View style={styles.tabContainer}>
                {Object.keys(this.state.tabs).map((key) => (
                    <TouchableOpacity
                        onPress={() => this.setState({ selectedKey: key })}
                        key={key}
                    >
                        <View style={{
                            backgroundColor: this.state.selectedKey === key ? purple : lightGray,
                            paddingVertical: 5,
                            borderRadius: 4,
                            paddingHorizontal: 7
                        }}
                        >
                            <Text style={styles.tabText}>{key}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    render() {
        const { navigation } = this.props;
        const statusBarHeight = StatusBar.currentHeight || 0;
        return (
            <View style={[styles.container, { paddingTop: statusBarHeight }]}>
                {this.state.searchmodalVisible && <SearchModal onClose={this.toggleSearchModal} />}
                <Header
                    onHome={() => navigation.navigate('Home Page')}
                    onAccount={() => navigation.navigate('Account Details')}
                    onSearch={this.toggleSearchModal}
                    onHamburger={() => navigation.navigate('Temporary Drawer')}
                />
                <Text style={styles.PageTitle}>Library</Text>
                {this.renderTabsPanel()}
                <FlatList
                    style={{ width: "96%", marginTop: 20 }}
                    renderItem={this.renderItem}
                    data={this.state.tabs[this.state.selectedKey].items}
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
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    PageTitle: {
        fontFamily: "Roboto",
        fontWeight: '800',
        fontSize: 32,
        color: white,
        marginTop: 6,
        paddingLeft: 15,
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    tabContainer: {
        backgroundColor: lightGray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        width: '96%',
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 8,
        marginHorizontal: 5,
    },
    tabText: {
        color: white,
        fontSize: 17,
        fontWeight: '800',
        fontFamily: 'Roboto',
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

})