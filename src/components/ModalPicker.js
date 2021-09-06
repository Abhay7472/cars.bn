import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import { colors } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
 

const OPTIONS = ['Edit', 'Delete']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {
    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }


    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(option)}>
                <Text style={styles.text}>
                    {item}

                </Text>
            </TouchableOpacity>
        )
    })

    return (
        <TouchableOpacity onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
           

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: "yellow",
        borderRadius: 10
    },
    option: {
        alignItems: 'flex-end',

    },
    text: {
        
        fontSize: 20,
        fontWeight:'bold'
    }

})
export { ModalPicker }