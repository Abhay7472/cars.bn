import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DocumentPicker from 'react-native-document-picker'
import ImagePicker from 'react-native-image-crop-picker';
import Feather from 'react-native-vector-icons/Feather';
import { Avatar } from 'react-native-elements';
import colors from '../../constants/Colors';
import images from '../../constants/Images'


const RagistrationDealerScreen = ({ navigation }) => {


    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        //userType : type,
    });
    
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveQdZi9pVUm0br0quUidx2fmdD1Y_KyCWOg&usqp=CAU');

    const chooseFromGallery = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setImage(image.path);
          });
    }
    const UploadImage =()=>{
        return(
            <View>
                <TouchableOpacity style={{paddingTop:20,paddingLeft:10}}>
               <Avatar 
               name="file-upload" 
                    onPress={chooseFromGallery}
                    activeOpacity={0.7}
                    source={{uri: image}}
                     size={40}
                />
               </TouchableOpacity>
            </View>
        )
    }


    // const ComponyDocument = async authProps => {

    //     try {
    //         // const header ={
    //         //     Authorization: authProps.idToken 
    //         // }
    //         const results = await DocumentPicker.pickMultiple({
    //             type: [DocumentPicker.types.allFiles],
    //         })

    //         console.log(results[0].uri);

    //     } catch (err) {
    //         if (DocumentPicker.isCancel(err)) {
    //             // User cancelled the picker, exit any dialogs or menus and move on
    //         } else {
    //             throw err
    //         }
    //     }
    // }

    const Form = () => {

        return (
            <ScrollView>
                <View>
                    <View style={styles.headerWrapper}>
                        <Text style={{ color: "#213884" }}> First Name </Text>
                        <TextInput placeholder="First name" style={styles.input}> </TextInput>
                    </View>

                    <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                        <Text style={{ color: "#213884" }}> Last Name </Text>
                        <TextInput placeholder="Last name" style={styles.input}> </TextInput>
                    </View>

                    <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                        <Text style={{ color: "#213884" }}>  Email </Text>
                        <TextInput placeholder=" Email" style={styles.input}> </TextInput>
                    </View>

                    <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                        <Text style={{ color: "#213884" }}> Phone Number   </Text>
                        <TextInput placeholder=" Phone Number" style={styles.input}> </TextInput>
                    </View>

                    <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                        <Text style={{ color: "#213884" }}> Flat No / Street Name </Text>
                        <TextInput placeholder="Flat No / Street Name" style={styles.input}> </TextInput>
                    </View>

                    <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                        <Text style={{ color: "#213884" }}>  City </Text>
                        <TextInput placeholder="City" style={styles.input}> </TextInput>
                    </View>

                    <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                        <Text style={{ color: "#213884" }}> State </Text>
                        <TextInput placeholder="State" style={styles.input}> </TextInput>
                    </View>

                    <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}>  Password </Text>
                    <TextInput placeholder="Password" secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.input, {
                            color: colors.DarkGray3
                        }]}
                        autoCapitalize="none"> </TextInput>
                          <TouchableOpacity
                        onPress={updateSecureTextEntry}
                        style={{alignSelf:'flex-end',position:'absolute',paddingTop:10}}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                    <Text style={{ color: "#213884" }}> Confirm Password </Text>
                    <TextInput placeholder=" Confirm Password" secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.input, {
                            color: colors.DarkGray3
                        }]}
                        autoCapitalize="none"> </TextInput>
                             <TouchableOpacity
                        onPress={updateSecureTextEntry}
                        style={{alignSelf:'flex-end',position:'absolute',paddingTop:15}}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                    </View>
                    <View style={[styles.headerWrapper, { marginTop: 5 }]}>
                        <Text style={{ color: "#213884" }}> Company Name    </Text>
                        <TextInput placeholder=" Comapny Name  " style={styles.input}> </TextInput>
                    </View>
                    {/* <View style={[styles.headerWrapper, { marginTop: 5 }]}> */}
                    <Text style={{ color: "#213884", paddingTop: 10 }}>  Compony Document</Text>
                    <UploadImage />
                    {/* <TouchableOpacity
                         >
                        <FontAwesome5 name="file-upload" 
                        rounded
                        size={30}
                         onPress={chooseFromGallery}
                         activeOpacity={0.7}
                         source={{uri: image}} style={{ paddingTop: 15, paddingLeft: 10 }} />
                    </TouchableOpacity> */}

                    <TouchableOpacity style={styles.btn}
                        onPress={() => navigation.navigate('SignInScreen')}>
                        <Text style={styles.text}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    return (

        <ScrollView style={styles.main}>
            <View style={styles.upper}>
                <Image style={styles.img} source={images.carLogo} />
            </View>
            <View style={styles.lower}>
                <Ionicons name="chevron-back" color={"#213884"} size={35} />
                <Text style={styles.heading}>Registration</Text>
                <Form />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#213884",
        flex: 1
    },
    upper: {
        backgroundColor: "#213884",
        height: Dimensions.get('screen').height / 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower: {
        height: Dimensions.get('screen').height / 7 * 8,
        backgroundColor: 'white',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    img: {
        height: "100%",
        width: '50%'
    },
    heading: {
        color: "#213884",
        fontSize: 22,
        fontFamily: 'sans-serif-medium',
        marginVertical: 10,
        marginLeft: 5
    },
    btn: {
        height: 50,
        width: '95%',
        backgroundColor: "#213884",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30
    },
    text: {
        color: 'white',
        fontSize: 17
    },
    input: {
        color: 'grey',
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        padding: 0
    },
    headerWrapper: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        fontSize: 15,
        alignSelf: 'auto',
        color: colors.PrimaryBlue,
        marginTop: 10
    },

})

export default RagistrationDealerScreen;
