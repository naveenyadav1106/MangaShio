import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    StatusBar as RNStatusBar
}
    from 'react-native'

import { coverPic, profilePic, Diamond, Gold, Silver } from '../assets'
import { black, white, midGray } from '../colors'

import SearchModal from '../components/SearchModal'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'


class AccountDetails extends Component {
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
        const win = Dimensions.get("window");
        const ratio = win.width / 428;
        const statusBarHeight = RNStatusBar.currentHeight || 0;
        return (
            <>
                {this.state.searchmodalVisible && <SearchModal onClose={this.toggleSearchModal} />}
                <ScrollView style={[style.container, { paddingTop: statusBarHeight }]}>
                    <ImageBackground
                        style={{ width: '100%', height: 197 * ratio }}
                        source={coverPic}
                    >
                        <Header
                            onHome={() => navigation.navigate('Home Page')}
                            onAccount={() => navigation.navigate('Account Details')}
                            onSearch={this.toggleSearchModal}
                        />
                        <TouchableOpacity
                            style={[style.profilePicContainer, { top: 100 * ratio }]}
                        >
                            <Image
                                style={style.profilePic}
                                resizeMode='cover'
                                source={profilePic}
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                    <Text style={style.username}>Gangmember420</Text>
                    <View style={{ marginTop: 95, marginBottom: 30 }}>
                        <View style={style.sectionContainer}>
                            <Text style={style.sectionTitle}>Account Settings</Text>
                            <View style={style.inputContainer}>
                                <Input
                                    label="Email"
                                    containerStyles={style.InputText}
                                    inputStyles={{ color: white }}
                                />
                                <Input
                                    label="Username"
                                    containerStyles={style.InputText}
                                    inputStyles={{ color: white }}
                                />
                                <Button
                                    BtnLabel="Save"
                                    btnStyles={style.Button}
                                    TextStyles={style.Title}
                                />
                            </View>
                        </View>
                        <View style={style.sectionContainer}>
                            <Text style={style.sectionTitle}>Change Password</Text>
                            <View style={style.inputContainer}>
                                <Input
                                    label="Password"
                                    containerStyles={style.InputText}
                                    inputStyles={{ color: white }}
                                />
                                <Button
                                    BtnLabel="Save"
                                    btnStyles={style.Button}
                                    TextStyles={style.Title}
                                />
                            </View>
                        </View>
                        <View style={style.sectionContainer}>
                            <Text style={style.sectionTitle}>Subscriptions</Text>
                            {/* <View style={style.subscriptionContainer}>
                                <View style={style.TextContainer}>
                                    <View style={style.UpperText}>
                                        <Text style={style.BigText}>Free Plan</Text>
                                        <Text style={style.smallText}>Ads every 3 chapters</Text>
                                    </View>
                                    <Text style={style.lowerText}>$0.00</Text>
                                </View>
                                <View style={style.TextContainer}>
                                    <View style={style.UpperText}>
                                        <Text style={style.BigText}>Premium</Text>
                                        <Text style={style.smallText}>Ad free</Text>
                                    </View>
                                    <Text style={style.lowerText}>$16.99/m</Text>
                                </View>
                            </View> */}
                            <View style={style.subscriptionContainer}>
                                <View style={style.subItemContainer}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={Diamond} />
                                        <Text style={style.SubType}>Diamond</Text>
                                    </View>
                                    <Text style={style.subText}>Ad free for life</Text>
                                    <Button BtnLabel="$25"
                                        btnStyles={style.subButton}
                                        TextStyles={style.subBtnText}
                                    />
                                </View>
                                <View style={style.subItemContainer}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={Gold} />
                                        <Text style={style.SubType}>Gold</Text>
                                    </View>
                                    <Text style={style.subText}>Ad free for one year</Text>
                                    <Button BtnLabel="$16"
                                        btnStyles={style.subButton}
                                        TextStyles={style.subBtnText}
                                    />
                                </View>
                                <View style={style.subItemContainer}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={Silver} />
                                        <Text style={style.SubType}>Silver</Text>
                                    </View>
                                    <Text style={style.subText}>Ad free for one month</Text>
                                    <Button BtnLabel="$3"
                                        btnStyles={style.subButton}
                                        TextStyles={style.subBtnText}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>
        );
    }
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: black,
    },
    profilePicContainer: {
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
    },
    profilePic: {
        width: 130,
        height: 130,
        borderRadius: 100,
    },
    username: {
        position: 'absolute',
        top: 220,
        color: white,
        fontWeight: '700',
        fontSize: 24.07,
        alignSelf: 'center',
    },
    sectionContainer: {
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 24,
        fontFamily: 'Roboto',
        color: white,
    },
    inputContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    InputText: {
        width: '100%',
        backgroundColor: midGray,
        borderRadius: 4,
    },
    Button: {
        width: 90,
        borderRadius: 4,
        marginTop: 15,
    },
    Title: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Roboto'
    },
    subscriptionContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        marginTop: 20,
    },
    subItemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 10,
        borderRadius: 4,
        elevation: 4,
        marginHorizontal: 5,
    },
    SubType: {
        color: white,
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 13,
        marginLeft: 2,
    },
    subText: {
        color: white,
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 8,
    },
    subButton: {
        width: 52,
        height: 20,
        borderRadius: 2,
    },
    subBtnText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '400',
    }
    // TextContainer: {
    //     alignItems: 'center',
    //     width: 170,
    //     height: 171,
    //     borderRadius: 4,
    //     borderColor: 'black',
    //     borderWidth: 0.3,
    //     justifyContent: 'space-between',
    //     paddingTop: 10,
    //     paddingBottom: 15,
    // },
    // UpperText: {
    //     alignItems: 'center',
    //     width: '100%'
    // },
    // lowerText: {
    //     color: white,
    //     fontWeight: '700',
    //     fontSize: 25,
    //     fontFamily: "Roboto",
    // },
    // BigText: {
    //     fontWeight: '700',
    //     fontFamily: 'Roboto',
    //     fontSize: 29,
    //     color: white,
    //     marginBottom: 10,
    // },
    // smallText: {
    //     fontWeight: '700',
    //     fontSize: 13,
    //     color: white,
    //     width: '50%',
    //     textAlign: 'center'
    // }
})

export default AccountDetails;