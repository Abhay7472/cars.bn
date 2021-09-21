import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { Picker } from '@react-native-picker/picker';
import { RadioButton, TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../constants/Colors';
import images from '../../../constants/Images';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Rental = ({ navigation }) => {

    const [pickerValue, setpickerValue] = React.useState('first');
    const [currentPosition, setCurrentPosition] = useState(3);
    const [checked, setChecked] = React.useState('Third');


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
            <View style={{ marginTop: 20 }}>
                <StepIndicator
                    customStyles={customStyles}
                    labels={labels}
                    currentPosition={currentPosition}
                    stepCount='3' />
            </View>
            <ImageBackground
                source={images.carImage}
                style={{ height: '50%', marginTop: 20, width: "100%" }}>
                <View style={[styles.card,]}>
                    <View style={{ flexDirection: 'row', }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            onPress={() => navigation.navigate('CreatePost1')}
                            color="red"

                        /><Text style={{ color: '#00008b', fontSize: 20, paddingTop: 5, paddingRight: 10 }}> New</Text>
                        <RadioButton
                            value="Second"
                            status={checked === 'Second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Second')}
                            onPress={() => navigation.navigate('CreatePostPrice')}
                            color="red"
                        /><Text style={{ color: '#00008b', fontSize: 20, paddingTop: 5, paddingRight: 10 }}> Used</Text>
                        <RadioButton
                            value="Third"
                            status={checked === 'Third' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Third')}
                            onPress={() => navigation.navigate('Rental')}
                            color="red"
                        /><Text style={{ color: '#00008b', paddingTop: 3, fontSize: 20 }}> Rental</Text>
                    </View>

                    <Text style={[styles.text_footer, {
                        color: "#213884"
                    }]}>Make</Text>
                    <View>

                        <Picker
                            style={styles.picker}
                            selectedValue={pickerValue}
                            onValueChange={(itemValue) => setpickerValue(itemValue)}>
                            <Picker.Item label="abc" value="abc"></Picker.Item>
                            <Picker.Item label="marvel" value="marvel"></Picker.Item>
                            <Picker.Item label="xyz" value="xyz"></Picker.Item>
                        </Picker>

                    </View>
                    <Text style={[styles.text_footer, {
                        color: "#213884",
                    }]}>Modal</Text>
                    <View>
                        <Picker
                            style={styles.picker}
                            selectedValue={pickerValue}
                            onValueChange={(itemValue) => setpickerValue(itemValue)}>
                            <Picker.Item label="10" value="10"></Picker.Item>
                            <Picker.Item label="20" value="20"></Picker.Item>
                            <Picker.Item label="30" value="30"></Picker.Item>
                        </Picker>
                    </View>
                    <Text style={[styles.text_footer, {
                        color: "#213884",
                    }]}>Year</Text>
                    <View>
                        <Picker
                            style={styles.picker}
                            selectedValue={pickerValue}
                            onValueChange={(itemValue) => setpickerValue(itemValue)}>
                            <Picker.Item label="1" value="1"></Picker.Item>
                            <Picker.Item label="2" value="2"></Picker.Item>
                            <Picker.Item label="3" value="3"></Picker.Item>
                        </Picker>
                    </View>




                    <Text style={[styles.text_footer, {
                        color: "#213884",
                    }]}>Registration Number </Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Number"
                            placeholderTextColor="#213884"
                            style={[styles.textInput, {
                                color: colors.DarkGray3
                            }]}
                            autoCapitalize="none"

                        />

                    </View>
                    <Text style={[styles.text_footer, {
                        color: "#213884"
                    }]}>Current Milage </Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Milage"
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
                            onPress={() => navigation.navigate('ForAuction')}
                        >
                            <LinearGradient
                                colors={["#213884", "#213884"]}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, { color: '#fff' }]}> Next</Text>

                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        backgroundColor: 'white',
        borderBottomWidth: 1

    },
    dropSownText: {
        color: colors.PrimaryBlue,
        fontSize: 18,
        paddingLeft: 10

    },
    signIn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        paddingLeft: 5
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    card: {
        shadowColor: '#3D3D3D',
        backgroundColor: 'white',
        elevation: 20,
        padding: 10,
        marginLeft: 20,
        marginRight: 25,
        borderRadius: 10,
        marginTop: "43%",
        marginBottom: "10%"
    },
    input: {
        backgroundColor: '#fff',
        fontSize: 15,
        borderBottomWidth: 2

    },
    headerWrapper: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        fontSize: 15,
        alignSelf: 'auto',
        color: colors.PrimaryBlue,
        paddingTop: 10
    },
    btn: {
        backgroundColor: "#213884",
        color: 'white',
        borderRadius: 40,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 15,
        paddingTop: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10
    },
});

export default Rental;

