
import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import colors from '../../constants/Colors'
import images from '../../constants/Images'

export default function SocialLoginScreen({ navigation }) {

    return (
        <ImageBackground source={images.bgImage} style={style.backgroundComtainer} style={{ flex: 1 }}>
            <TouchableOpacity><Text style={{ color: '#fff', alignSelf: 'flex-end', fontSize: 20, padding: 10 }}
                onPress={() => navigation.navigate('HomePage')}>Skip</Text></TouchableOpacity>
            <View >
                <Text style={style.text}>Provide your details to Confirm your list </Text>
            </View>
            <View>
                <TouchableOpacity style={style.socialInput}
                    onPress={() => navigation.navigate('RegistrationScreen')}>
                    <Image
                        source={images.Facebook}
                        style={style.icon} />
                    <Text style={{ flex: 0.9, color: '#000', textAlign: 'left', fontSize: 20, paddingLeft: 30 }} >
                        FACEBOOK
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={style.socialInput}
                    onPress={() => navigation.navigate('RegistrationScreen')}>
                    <Image
                        source={images.search}
                        style={[style.icon, { height: 40, width: 40 }]} />
                    <Text style={{ flex: 0.9, color: '#000', textAlign: 'left', fontSize: 20, paddingLeft: 30 }} >
                        GOOGLE
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.socialInput}
                    onPress={() => navigation.navigate('SignInScreen')}>
                    <Text style={{ flex: 0.9, color: '#000', textAlign: 'center', fontSize: 20, paddingLeft: 30 }} >
                        Continue with Email
                    </Text>
                </TouchableOpacity>
                <View style={{ marginTop: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={images.warranyty} style={{ width: 20, height: 20, }}></Image>
                    <Text style={{ color: "white", textAlign: 'center', paddingLeft: 10, }}>your information is safe with us </Text>
               </View>

            </View>



        </ImageBackground>
    )
}

const style = StyleSheet.create({
    backgroundComtainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        // justifyContent:'center',
        // alignItems:'center',
        // alignSelf:'center'
        marginTop: "40%"
    },

    submit1: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: "hidden"
    },
    submitText2: {
        flex: 1,
        fontSize: 25,
        //justifyContent:'center',
        color: 'grey',
        //alignSelf:'center',
        //textAlign:'left'
    },
    icon: {
        padding: 5,
        marginLeft: 5,
        width: 50,
        height: 50,
        borderRadius: 40 / 2,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    socialInput: {
        marginTop: 15,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'blue',
        height: 65,
        borderRadius: 50,
        marginBottom: 10,
        marginHorizontal: 10,
        fontSize: 16,
        justifyContent: 'space-between',
        width: '80%',
    },
    btnText: {
        alignSelf: 'center',
    }
})