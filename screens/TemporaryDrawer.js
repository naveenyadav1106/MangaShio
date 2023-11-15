import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native'
import Header from '../components/Header'
import { black, white } from '../colors'
import { StatusBar } from 'react-native'
import SearchModal from '../components/SearchModal'

export default class TemporaryDrawer extends Component {
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
        const statusBarHeight = StatusBar.currentHeight || 0;
        return (
            <View style={[styles.container, { paddingTop: statusBarHeight }]}>
                {this.state.searchmodalVisible && <SearchModal onClose={this.toggleSearchModal} />}
                <Header
                    onHome={() => this.props.navigation.navigate('Home Page')}
                    onAccount={() => this.props.navigation.navigate('Account Details')}
                    onSearch={this.toggleSearchModal}
                />
                <View style={styles.ButtonContainer}>
                    <View>
                        <Button
                            title="Browse"
                            onPress={() => this.props.navigation.navigate('Browse')}
                        />
                        <Text style={styles.textStyles}>Go to Browse Screen</Text>
                    </View>
                    <View>
                        <Button
                            title="Library"
                            onPress={() => this.props.navigation.navigate('Library')}
                        />
                        <Text style={styles.textStyles}>Go to Library Screen</Text>
                    </View>
                    <View>
                        <Button
                            title="Settings"
                            onPress={() => this.props.navigation.navigate('Account Details')}
                        />
                        <Text style={styles.textStyles}>Go to Account Screen</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: black,
        flex: 1,
        width: '100%',
    },
    ButtonContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
    },
    textStyles: {
        fontFamily: 'Roboto',
        color: white,
        fontSize: 12,
        marginTop: 5,
        fontWeight: '700',
    },
})