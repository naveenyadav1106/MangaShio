import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    StatusBar,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native'

import { black, white } from '../colors'
import { bookmark, starImg, thumbnail3, topImage } from '../assets'

import { Details } from '../Manga Details/MangaDetailsData'

import Header from '../components/Header'
import SearchModal from '../components/SearchModal'
import Button from '../components/Button'

export default class MangaDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchmodalVisible: false,
            data: Details,
        }
    }



    renderItems = ({ item }) => {
        return (
            <TouchableOpacity
                // android_ripple={{ color: black }}
                style={styles.itemContainer}
                key={item.title}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={item.image}
                    />
                    <Text style={styles.number}>{item.number}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.days}>{item.days}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    toggleSearchModal = () => {
        this.setState((prevState) => ({
            searchmodalVisible: !prevState.searchmodalVisible,
        }));
    }

    render() {
        const statusBarHeight = StatusBar.currentHeight || 0;
        const window = Dimensions.get('window');
        const ratio = window.width / 428;
        return (
            <>
                {this.state.searchmodalVisible && <SearchModal onClose={this.toggleSearchModal} />}
                <View
                    contentContainerStyle={{ alignItems: 'center' }}
                    style={[styles.container, { paddingTop: statusBarHeight }]}>
                    <ImageBackground
                        style={{ width: '100%', height: 272 * ratio }}
                        source={topImage}
                    >
                        <Header
                            onHome={() => this.props.navigation.navigate('Home Page')}
                            onAccount={() => this.props.navigation.navigate('Account Details')}
                            onHamburger={() => this.props.navigation.navigate('Temporary Drawer')}
                            onSearch={this.toggleSearchModal}
                        />
                        <View style={styles.topContainer}>
                            <Image
                                source={thumbnail3}
                            />
                            <View style={styles.infoContainer}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={starImg}
                                        />
                                        <Text style={styles.reviewIcons}>9.54k</Text>
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            source={bookmark}
                                        />
                                        <Text style={styles.reviewIcons}>6.1k</Text>
                                    </View>
                                </View>
                                <Text
                                    style={{
                                        color: white,
                                        fontSize: 24,
                                        fontWeight: '700',
                                        fontFamily: 'Roboto'
                                    }}
                                >
                                    Oshi no Ko
                                </Text>
                                <Text
                                    style={{
                                        color: white,
                                        fontSize: 14,
                                        fontFamily: 'Roboto',
                                        fontWeight: '400',
                                    }}>
                                    Ayasaka Aka
                                </Text>
                                <View style={{ paddingTop: 10, paddingBottom: 15, marginLeft: -2 }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                        <View style={{ backgroundColor: '#999999', borderRadius: 7.5, alignItems: 'center', width: 55, marginHorizontal: 2 }}>
                                            <Text style={{ fontSize: 7.5, color: white, fontWeight: '700' }}>
                                                Homosexual
                                            </Text>
                                        </View>
                                        <View style={{ backgroundColor: '#999999', borderRadius: 7.5, alignItems: 'center', width: 55, marginHorizontal: 2 }}>
                                            <Text style={{ fontSize: 7.5, color: white, fontWeight: '700' }}>
                                                Homosexual
                                            </Text>
                                        </View>
                                        <View style={{ backgroundColor: '#999999', borderRadius: 7.5, alignItems: 'center', width: 55, marginHorizontal: 2 }}>
                                            <Text style={{ fontSize: 7.5, color: white, fontWeight: '700' }}>
                                                Homosexual
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ backgroundColor: '#999999', borderRadius: 7.5, alignItems: 'center', width: 55, marginHorizontal: 2 }}>
                                            <Text style={{ fontSize: 7.5, color: white, fontWeight: '700' }}>
                                                Homosexual
                                            </Text>
                                        </View>
                                        <View style={{ backgroundColor: '#999999', borderRadius: 7.5, alignItems: 'center', width: 55, marginHorizontal: 2 }}>
                                            <Text style={{ fontSize: 7.5, color: white, fontWeight: '700' }}>
                                                Homosexual
                                            </Text>
                                        </View>
                                        <View style={{ backgroundColor: '#999999', borderRadius: 7.5, alignItems: 'center', width: 55, marginHorizontal: 2 }}>
                                            <Text style={{ fontSize: 7.5, color: white, fontWeight: '700' }}>
                                                Homosexual
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.ReadNow}>
                                    <Image
                                        style={{ width: 18, height: 18 }}
                                        source={bookmark}
                                    />
                                    <Image
                                        style={{ width: 18, height: 18 }}
                                        source={starImg}
                                    />
                                    <Button
                                        BtnLabel="Read Now"
                                        btnStyles={styles.Button}
                                        TextStyles={styles.btnTitle}
                                    />
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={styles.btnContainer}>
                            <Button
                                BtnLabel="see more"
                                btnStyles={styles.seemore}
                                TextStyles={styles.seemoretext}
                            />
                        </View>
                    </View>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItems}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: black,
        height: '100%',
    },
    topContainer: {
        marginLeft: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        borderRadius: 4,
        resizeMode: "cover",
    },
    infoContainer: {
        marginRight: 70,
        paddingLeft: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    reviewIcons: {
        color: white,
        fontSize: 10,
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
    ReadNow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    Button: {
        height: 24,
        width: 94,
        borderRadius: 6,
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
    },
    btnTitle: {
        fontSize: 10,
        fontWeight: '700',
        fontFamily: 'Roboto'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        elevation: 1,
        borderRadius: 2,
    },
    number: {
        color: white,
        fontWeight: '600',
        fontFamily: 'Roboto',
        fontSize: 12.5,
        marginHorizontal: 5,
    },
    title: {
        marginLeft: 5,
        alignSelf: 'center',
        color: white,
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 9.5,
    },
    days: {
        color: white,
        fontFamily: 'Roboto',
        fontSize: 7,
        marginRight: 10
    },
    description: {
        color: white,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 9.5,
        marginRight: 5,
    },
    btnContainer: {
        position: 'absolute',
        // top: 0.25
    },
    seemore: {
        width: 54,
        height: 10,
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    },
    seemoretext: {
        fontFamily: 'Roboto',
        fontSize: 7,
        // fontWeight: '500',
    }
})