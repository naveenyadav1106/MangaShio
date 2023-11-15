import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/Header'
import { TABS_DATA } from '../Library_data/Library_data'
import { black, white } from '../colors'
import { StatusBar } from 'react-native'
import SearchModal from '../components/SearchModal'

export default class Library extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchmodalVisible: false,
            tabs: TABS_DATA,
        }
    }

    toggleSearchModal = () => {
        this.setState((prevState) => ({
            searchmodalVisible: !prevState.searchmodalVisible,
        }));
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: black,
        flex: 1,
    },
    PageTitle: {
        fontFamily: "Roboto",
        fontWeight: '800',
        fontSize: 32,
        color: white,
    }
})