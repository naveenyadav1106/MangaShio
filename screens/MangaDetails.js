import { Text, StyleSheet, View, ImageBackground, ScrollView, StatusBar, Dimensions, Image } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/Header'
import SearchModal from '../components/SearchModal'
import { black, lightGray, white } from '../colors'
import { bookmark, starImg, thumbnail3, topImage } from '../assets'
import Button from '../components/Button'

export default class MangaDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchmodalVisible: false
        }
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
                <ScrollView
                    // contentContainerStyle={{ alignItems: 'center' }}
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
                                style={styles.image}
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
                </ScrollView>
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
    }
})