
import React, { Component, useState } from 'react'
import { Switch, FlatList, SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions, Pressable, } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { Picker } from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker'

import colors from './constants/Colors';
import images from './constants/Images';
import { Card, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("window");

const ForAuction = () => {
    const  ComponyDocument =()=>{

        try {
            const results =     DocumentPicker.pickMultiple({
              type: [DocumentPicker.types.allFiles],
            })
            for (const res of results) {
              console.log(
                res.uri,
                res.type, // mime type
                res.name,
                res.size,
              )
            }
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err
            }
          }
        }
     // const deleteTodo = () => {
    //     var arr = this.state.Todo;
    //     var pos = arr.indexof(t);
    //     arr.splice(pos, 1);
    //     this.setState({ todo: arr });
    // }
    const array = [
        { id: 1, },
        { id: 2 },
        { id: 3 },
    ]
    const data2=[
        {id:1,},
        ]
    const [currentPosition, setCurrentPosition] = useState(2);
    const [pickerValue, setpickerValue] = React.useState('first');


    const renderitems1 = ({ item }) => {
        return (

            <View style={{ marginLeft: 10 }} >

                <TouchableOpacity id={1} onPress={() => this.deleteTodo}>
                    <Image source={images.cancle} style={{ alignSelf: 'flex-end' }} /></TouchableOpacity>
                <TouchableOpacity  onPress={()=>ComponyDocument()} >
                    <Image style={styles.image} source={images.cardImage} /></TouchableOpacity>

            </View>
        )
    }

    const labels = []
    const customStyles = {
        stepIndicatorSize: 25,
        separatorStrokeWidth: 2,
        currentStepIndicatorSize: 30,
        stepStrokeCurrentColor: 'white',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: 'red',
        stepStrokeUnFinishedColor: 'white',
        separatorFinishedColor: 'red',
        separatorUnFinishedColor: 'red',
        stepIndicatorFinishedColor: 'red',
        stepIndicatorUnFinishedColor: 'white',
        stepIndicatorCurrentColor: 'white',
    }


    return (
        <ScrollView>
            <View style={{ flexDirection: 'row' }}>
                <Image source={images.union} style={styles.img}></Image>
                <Text style={styles.text}>Create post</Text>
            </View>

            <View style={styles.indicatorContainer}>
                <StepIndicator
                    customStyles={customStyles}
                    labels={labels}
                    currentPosition={currentPosition}
                    stepCount='3' />

                <View>
                    <Text style={[styles.dropSownText, { paddingTop: 20 }]}>Select Company</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="abc" value="abc"></Picker.Item>
                        <Picker.Item label="marvel" value="marvel"></Picker.Item>
                        <Picker.Item label="xyz" value="xyz"></Picker.Item>
                    </Picker>

                </View>
                <View>
                    <Text style={[styles.dropSownText, { paddingTop: 20, borderTopWidth: 1 }]}> Modal  </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="java" value="java"></Picker.Item>
                        <Picker.Item label="css" value="css"></Picker.Item>
                        <Picker.Item label="html" value="html"></Picker.Item>
                    </Picker>

                </View>
                <View>
                    <Text style={[styles.dropSownText, { paddingTop: 20, borderTopWidth: 1 }]}> Category  </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setpickerValue(itemValue)}>
                        <Picker.Item label="1" value="1"></Picker.Item>
                        <Picker.Item label="2" value="2"></Picker.Item>
                        <Picker.Item label="3" value="3"></Picker.Item>
                    </Picker>

                </View>
                <View>
                    <Text style={[styles.dropSownText, { paddingTop: 20, borderTopWidth: 1 }]}> Rent per Day  </Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View >
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ paddingTop: 30, paddingLeft: 10, color: colors.PrimaryBlue, fontSize: 15 }}>
                        Sell your car within 24 Hours Useing quickSell  </Text>
                    <Switch />
                </View>
            </View>
            <View>
                <Text style={[styles.dropSownText, { paddingTop: 10, }]}> Category  </Text>
                <Picker
                    style={styles.picker}
                    selectedValue={pickerValue}
                    onValueChange={(itemValue) => setpickerValue(itemValue)}>
                    <Picker.Item label="1" value="A" ></Picker.Item>
                    <Picker.Item label="2" value="B"></Picker.Item>
                    <Picker.Item label="3" value="C"></Picker.Item>
                </Picker>

            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 30, paddingLeft: 10, color: colors.PrimaryBlue, fontSize: 15 }}>
                    1. Not Sure? Get Inspection By CarsBN </Text>
                <Switch />
            </View>
            <Text style={{ paddingTop: 20, paddingLeft: 10, color: colors.PrimaryBlue, fontSize: 15 }}>Upoad Images</Text>
            <View style={{ flexDirection: "row", justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <FlatList style={styles.flatList} horizontal showsHorizontalScrollIndicator={false} data={array} renderItem={renderitems1}  > </FlatList>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <FlatList style={[styles.flatList, { paddingTop: 10 }]} horizontal showsHorizontalScrollIndicator={false} data={data2} renderItem={renderitems1} keyExtractor={item => item.title}> </FlatList>
                <TouchableOpacity>
                    <Card style={styles.card}>
                        <Image source={images.plus} style={{ alignSelf: 'center' }} />
                    </Card>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ paddingTop: 15, paddingLeft: 10, color: colors.PrimaryBlue, fontSize: 15 }}>
                    2. Professional Photos attracts more views  </Text>
                <Switch />
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text style={{ paddingLeft: 22, color: colors.PrimaryBlue, fontSize: 15 }}>
                    Get proper photo with 360 angles ?  </Text>
            </View>
            <TouchableOpacity           
                 
                >
                <Text style={styles.btn}> Next </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#213884",
        color: 'white',
        borderRadius: 40,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 15,
        paddingTop: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 15
    },

    card: {
        shadowColor: colors.PrimaryBlue,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 10,
        padding: 15,
        marginRight: "40%",
        marginTop: 25,
    },
    text: {
        marginLeft: 10,
        fontSize: 20,
        color: colors.PrimaryBlue,
        marginTop: 15,
        fontWeight: "500"
    },
    img: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 5
    },
    dropSownText: {
        color: colors.PrimaryBlue,
        fontSize: 18,
        paddingLeft: 15

    },
    picker: {
        width: 380,
        height: 45,
        borderBottomColor: colors.DarkGray3,
        borderBottomWidth: 1,
        color: '#000',
        borderColor: colors.PrimaryBlue,
        paddingRight: 20
    },
    indicatorContainer: {
        margin: 10,
        paddingTop: 16
    },
    textInput: {
        borderBottomWidth: 1,
        paddingLeft: 20,
        backgroundColor: '#fff',
        borderBottomColor: colors.DarkGray3,
        height: 35
    },
    headerWrapper: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        fontSize: 15,
        alignSelf: 'auto',
        color: colors.PrimaryBlue,
        marginTop: 10
    },

    image: {
        height: 90,
        width: 110,
        justifyContent: 'space-evenly',
        marginLeft: 5,
    },

    outerbox: {
        width: Dimensions.get('screen').width / 4 * 2,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        marginHorizontal: 10,
        marginTop: 20,

    },
    flatList: {
        width: 40,
        height: 90,

    }
})



export default ForAuction;




