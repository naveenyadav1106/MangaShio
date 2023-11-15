import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/Header'
import { black, white } from '../colors'
import { StatusBar } from 'react-native'
import SearchModal from '../components/SearchModal'

export default class Browse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchmodalVisible: false,
        }
    }

    toggleSearchModal = () => {
        this.setState((prevState) => ({
            searchmodalVisible: !prevState.searchmodalVisible,
        }));
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: black
    },
    PageTitle: {
        color: white,
        fontFamily: 'Roboto',
        fontWeight: '800',
        fontSize: 32,
    }
})