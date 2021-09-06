import React, { useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../../constants/Colors';
import { ModalPicker } from '../../components/ModalPicker';
import images from '../../constants/Images';

//
const MyPostDesign = ({ navigation: { goBack } }) => {

    const [isModalVisible, setisModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setChooseData(option)
    }

    const data1 = [
        { title: '2018 Toyota C HR 1.8', paragraph: 'Automatic | 4Seater | Sadan', body: 'Lodon Ispum is simple domy Text' },
        { title: "BMW", paragraph: '4250 km | Automatic', body: '25000$' }]

    const Renderitems1 = () => {
        return (

            <View style={styles.outerbox}>
                <Icon
                    name='more-vert'
                    size={30}
                    color='white'
                    style={{ alignSelf: 'flex-end', position: 'absolute', zIndex: 1 }}
                    onPress={() => changeModalVisibility(true)} />

                <Image style={styles.image} source={images.cardImage}>
                </Image>
                <View style={styles.innerbox}>
                    <Text style={styles.title}>Ford Mustang-2014</Text>
                    <Text style={styles.paragraph}> 4250km | Automatic</Text>
                    <Text style={[styles.paragraph, { color: "#213884", fontSize: 20 }]}> $ 25000</Text>
                </View>
                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="fade"
                    nRequestClose={() => changeModalVisibility(false)}
                >
                    <ModalPicker
                        changeModalVisibility={changeModalVisibility}
                        setData={setData} />
                    <View style={{ position: 'absolute' }}>
                        <View style={{ backgroundColor: '#ffffff', margin: 10, padding: 10, borderRadius: 10, }}>
                            <Text onPress={() => { this.setState({ show: false }) }}
                                style={{ padding: 10, borderBottomWidth: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                <Icon name='edit'
                                    color="red" /> Edit</Text>
                            <Text onPress={() => { this.setState({ show: false }) }}
                                style={{ padding: 10, }}>
                                <Icon name='delete'
                                    color="red" /> Delete</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }



    return (
        <ScrollView>
            <View>

                <Text style={[styles.text, { color: colors.PrimaryBlue, fontWeight: 'bold' }]}>Request Panding</Text>
                <Renderitems1 />
                <Text style={[styles.text, { color: 'green', fontWeight: 'bold' }]}>Approved</Text>
                <View style={{ flexDirection: 'row' }}>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />
                </View>
                <Text style={[styles.text, { color: 'red', fontWeight: 'bold' }]}>Rejected</Text>
                <Renderitems1 />

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
        fontWeight: "500"
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
        flex: 2
    },
    image: {
        height: 100,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1
    },
    innerbox: {
        padding: 10,
        flex: 1
    },
    title: {
        color: 'black',
        fontFamily: 'sans-serif-medium',
        fontSize: 15
    },
    paragraph: {
        fontSize: 11
    }

})
export default MyPostDesign
