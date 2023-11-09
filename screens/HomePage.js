import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    StatusBar as RNStatusBar
}
    from 'react-native';

import {
    leftArrow,
    rightArrow,
    thumbnail1,
    thumbnail2,
    thumbnail3,
    topImage
}
    from '../assets';

import { white, black } from '../colors';

import Button from '../components/Button';
import Header from '../components/Header';
import RowItems from '../components/RowItems';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.ITEMS = [
            { image: thumbnail1, itemTitle: 'Ore no Koto ga Daikirai na Imouto ga Kowai' },
            { image: thumbnail2, itemTitle: 'Solo Levelling' },
            { image: thumbnail3, itemTitle: 'Some crazy hoe' },
        ];
    }

    render() {
        const statusBarHeight = RNStatusBar.currentHeight || 0;
        const win = Dimensions.get("window");
        const ratio = win.width / 428;
        return (
            <View style={[styles.container, { paddingTop: statusBarHeight }]} >
                <ScrollView style={{ width: '100%' }}>
                    <ImageBackground source={topImage} style={[styles.topImage, { height: 272 * ratio }]}>
                        <Header
                            onHome={() => this.props.navigation.navigate('Home Page')}
                            onAccount={() => this.props.navigation.navigate('Account Details')}
                        />
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <Text style={styles.Title}>Oshi no Ko</Text>
                            <Button
                                BtnLabel="Read Now"
                                TextStyles={{ fontSize: 14, fontWeight: '600' }}
                                btnStyles={{ width: 86 }}
                            />
                        </View>
                        <View style={styles.arrowContainer}>
                            <Image source={leftArrow} />
                            <Text style={{ fontSize: 10.31, fontWeight: '400', color: white }}>7/10</Text>
                            <Image source={rightArrow} />
                        </View>
                    </ImageBackground>
                    <RowItems title="Popular" data={this.ITEMS} />
                    <RowItems title="Latest Update" data={this.ITEMS} />
                    <RowItems title="Recently Added" data={this.ITEMS} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        backgroundColor: black,
    },
    topImage: {
        width: '100%',
        flexShrink: 0,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Title: {
        fontWeight: '500',
        fontSize: 37.64,
        color: white,
        fontFamily: 'Roboto',
        marginBottom: 15,
        marginTop: 10,
    },
    arrowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
});

export default HomePage;
