import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import colors from '../../constants/Colors';
import images from '../../constants/Images';
 


const CreatePost2 = ({navigation}) => {

    const DropDown = () => {

        return (
            <View>
                <TouchableOpacity onPress={() => { }} style={[styles.card, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                    <Text style={styles.bigBlueText}>Post Submitted to Admin!</Text>
                    <Ionicons name="checkmark-done" color="#213884" size={30} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Image source={images.union} style={styles.img}></Image>
                <Text style={styles.text}>Create post</Text>
            </View>

            <Image source={images.PostImage} style={{ borderRadius: 40, alignSelf: 'center', marginTop: 20 }} />

            <DropDown />

            <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 20 }}>
                <TouchableOpacity>
                    <Text style={[styles.btn, { paddingLeft: 35, paddingRight: 35 }]}>Sponcer Post</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.btn, { paddingLeft: 35, paddingRight: 35 }]}>Promote Post</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 20 }}>
                <TouchableOpacity>
                    <Text style={styles.btn}>Request Inspection </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.btn}> 360'View Request</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 5
    },
    text: {
        marginLeft: 10,
        fontSize: 20,
        color: "#213884",
        marginTop: 15,
        fontWeight: "500"
    },
    card: {
        shadowColor: '#3D3D3D',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        marginBottom: 10,
        marginTop: 25
    },
    bigBlueText: {
        color: "#213884",
        fontSize: 25,
        marginLeft: 10,
        alignSelf: 'center',

    },
    btn: {
        backgroundColor: "#213884",
        color: 'white',
        borderRadius: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        fontWeight: '200'
    },



})
export default CreatePost2;
















// import React from 'react'
// import { View, Text, StyleSheet, Image } from 'react-native'
// import { Slider } from 'react-native-elements';
// import { RadioButton, TextInput } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Button from './components/button';
// //import { Card, Title, Paragraph } from 'react-native-paper';
// import Card from './components/card';
// //import TextField from '@material-ui/core/TextField';

// export default function design() {

//     const [checked, setChecked] = React.useState('first');

//     return (
//         <View>
//             <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 5 }}>
//                 <Icon name="md-chevron-back" color={color = "#00008b"} size={30} />
//                 <Text style={{ fontSize: 20, color: '#00008b' }}>Create post</Text>
//             </View>
//             <View style={styles.container}>
//                 <Slider style={{}} />
//             </View>
//             <View style={{ overflow: 'hidden' }}>
//                 <Image source={require('./assets/car.jpg')}
//                     style={styles.image} />      
//                 <View style={styles.radioButton}>
//                     <Card style={styles.cardStyle}>
//                         <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
//                             <RadioButton
//                                 value="first"
//                                 status={checked === 'first' ? 'checked' : 'unchecked'}
//                                 onPress={() => setChecked('first')}
//                                 color="red"

//                             /><Text style={{ color: '#00008b', fontSize: 20 }}> Retail</Text>

//                             <RadioButton
//                                 value="second"
//                                 status={checked === 'second' ? 'checked' : 'unchecked'}
//                                 onPress={() => setChecked('second')}
//                                 color="red"
//                             />
//                             <Text style={{ color: '#00008b', fontSize: 20 }}>Sell</Text>

//                             <RadioButton
//                                 value="third"
//                                 status={checked === 'third' ? 'checked' : 'unchecked'}
//                                 onPress={() => setChecked('third')}
//                                 color="red"
//                             />
//                             <Text style={{ color: '#00008b', fontSize: 20 }}>Auction</Text>
//                         </View>
//                         <Text style={{ color: '#00008b', fontSize: 15, margin: 10 }}>Registration Number</Text>
//                         <TextInput></TextInput>
//                         <Text style={{ color: '#00008b', fontSize: 15, margin: 10 }}>Current Message</Text>
//                         <TextInput></TextInput>
//                         <Button onPress={() => alert('clicked')}>
//                             <Text style={{ color: '#fff', fontSize: 16 }}>Start Now</Text>
//                         </Button>
//                     </Card>

//                 </View>
//             </View>

//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginLeft: 20,
//         alignItems: "stretch",
//         justifyContent: "center",
//         width: "30%",
//     },
//     cardStyle: {
//         width: "90%",
//         height: 190,
//         backgroundColor: 'white',
//         marginVertical: 10,
//     },
//     radioButton: {
//         flexDirection: 'row',
//         alignSelf: 'center',
//         marginTop: 10,
//         overflow: 'hidden'
//     },
//     image: {
//         width: '100%',
//         height: "60%",
//         marginTop: 20,
//     }



// });


