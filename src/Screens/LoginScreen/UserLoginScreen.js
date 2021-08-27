

import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import Button from '../../components/button'
import Colors from '../../constants/Colors'
import images from '../../constants/Images'

export default function UserLoginScreen({ navigation }) {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <ImageBackground source={images.back} style={style.container} >
                <Text style={style.secondText}>Continue as</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Button style={style.button} onPress={() => navigation.navigate('SocialLoginScreen')}>
                        <Text style={{ color: Colors.PrimaryBlue, fontSize: 16 }}>CUSTOMER</Text>
                    </Button>

                    <Button style={style.button} onPress={() => navigation.navigate('SignInScreen')}>
                        <Text style={{ color: Colors.PrimaryBlue, fontSize: 16 }}>DEALER</Text>
                    </Button>
                </View>
            </ImageBackground>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    text: {
        color: "white",
        fontSize: 30,
        lineHeight: 84,
        textAlign: "center",
        alignSelf: 'center',
        marginTop: "60%",
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    secondText: {
        color: 'white',
        marginTop: 10,
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 30
    },

    button: {
        backgroundColor: '#fff',
        width: '35%',
        borderRadius: 10,
        flexDirection: 'column'
    },


})