import React from 'react'
import { View, Text, TextInput, StyleSheet,Image, TouchableOpacity, StatusBar,} from 'react-native'
import * as Animatable from 'react-native-animatable';
 import images from '../../constants/Images.js';
 import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/Colors.js'


export default function ForgetPassword() {
    return (
     
        <View style={styles.container}>
            <StatusBar backgroundColor="#213884" barStyle="dark-content" />
            <View style={styles.header}>
               <Image source={images.carLogo} style={{alignSelf:'center',height:"60%",width:'80%', resizeMode:"stretch"}}/> 
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.white
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: "#213884"
                }]}>Username</Text>
                <View style={styles.action}>
                    {/* <FontAwesome
                        name="user-o"
                        color={colors.text}
                        size={20}
                    /> */}
                    <TextInput
                        placeholder="Your Username"
                        placeholderTextColor="#213884"
                        style={[styles.textInput, {
                            color: colors.DarkGray3
                        }]}
                        autoCapitalize="none"
                      
                    />
                    
                   </View>              

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        //onPress={() => { loginHandle(data.username, data.password) }}
                    >
                        <LinearGradient
                            colors={["#213884","#213884"]}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {color: '#fff'}]}> Submit</Text>

                        </LinearGradient>
                    </TouchableOpacity>

                </View>
                <View style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:colors.PrimaryBlue ,marginTop:"50%"}}>
                  
                  <TouchableOpacity>
                        <Text>
                    Search by Email
                    </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#213884"
    },
    header: {
        flex: 1,
        justifyContent: 'center',         
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        borderBottomWidth:1
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});