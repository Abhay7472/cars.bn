import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import colors from './constants/Colors';
import images from './constants/Images';
import button from './components/button';



const CreatePost3 = ({ navigation }) => {

    const [checked, setChecked] = React.useState('first');
    const [pickerValue, setpickerValue] = React.useState('first');


    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={images.union} style={styles.img}></Image>
                    <Text style={styles.text}>Create post</Text>
                </View>
                <Image source={images.carImage} style={{ borderRadius: 40, alignSelf: 'center', width: "95%", marginTop: 20 }} />
                <View>
                    <View>
                        <Text style={[styles.textInputText, { paddingTop: 30 }]}>Select Company</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={pickerValue}
                            onValueChange={(itemValue) => setpickerValue(itemValue)}
                        >
                            <Picker.Item label="abc" value="abc"></Picker.Item>
                            <Picker.Item label="marvel" value="marvel"></Picker.Item>
                            <Picker.Item label="xyz" value="xyz"></Picker.Item>

                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.textInputText}>Model</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={pickerValue}
                            onValueChange={(itemValue) => setpickerValue(itemValue)}
                        >
                            <Picker.Item label="1" value="1"></Picker.Item>
                            <Picker.Item label="2" value="2"></Picker.Item>
                            <Picker.Item label="3" value="3"></Picker.Item>
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.textInputText}>Category</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={pickerValue}                            
                            onValueChange={(itemValue) => setpickerValue(itemValue)}
                        >
                            <Picker.Item label="java" value="java"></Picker.Item>
                            <Picker.Item label="css" value="css"></Picker.Item>
                            <Picker.Item label="html" value="html"></Picker.Item>
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.textInputText}>Current Mileage</Text>
                        <TextInput style={styles.textInput}>
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.textInputText}>Registration Number</Text>
                        <TextInput style={styles.textInput}>
                        </TextInput>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 10, justifyContent: 'space-between', paddingRight: 30 }}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color="red"
                        uncheckedColor='red' />
                    <Text style={{ color: '#00008b', fontSize: 20 }}> New</Text>

                    <RadioButton
                        value="Second"
                        status={checked === 'Second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Second')}
                        color="red"
                        uncheckedColor='red' />
                    <Text style={{ color: '#00008b', fontSize: 20 }}> Used</Text>

                    <RadioButton
                        value="Third"
                        status={checked === 'Third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Third')}
                        color="red"
                        uncheckedColor='red' />
                    <Text style={{ color: '#00008b', fontSize: 20 }}> Auction</Text>

                    <RadioButton
                        value="Forth"
                        status={checked === 'Forth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Forth')}
                        color="red"
                        uncheckedColor='red'
                    />
                    <Text style={{ color: '#00008b', fontSize: 20 }}> Rental</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.btn}> Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

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
        fontWeight: '800'
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingLeft: 20,
        paddingTop:5

    },
    textInputText: {
        color: colors.PrimaryBlue,
        padding: 20,
        fontSize: 18,
        paddingBottom: -15,

    },
    btn: {
        backgroundColor: "#213884",
        color: 'white',
        borderRadius: 40,
        paddingLeft: 35,
        paddingRight: 40,
        paddingBottom: 15,
        paddingTop: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 60,
        marginBottom:30
         


    },
    picker: {
        width: 380,
        height: 45,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        color: 'black',
        borderColor: 'grey',
        marginLeft: 10


    }






})
export default CreatePost3;

