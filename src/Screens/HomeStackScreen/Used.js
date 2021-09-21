import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Image, ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/Colors'
import images from '../../constants/Images'

const Used = ({navigation}) => {

    const [like, setLike] = useState(false)
    const [list1, setlist1] = useState(false)

    const data1 = [
        { model: '2018 Toyota C HR 1.8', paragraph: '4250 km | Automatic', price: '25000$', calculator: true },
        { model: "BMW", paragraph: '4250 km | Automatic', price: '25000$', calculator: false },
        { model: '2018 Toyota C HR 1.8', paragraph: '4250 km | Automatic', price: '25000$', calculator: true },

    ]

    const renderitems = ({ item }) =>
        <TouchableOpacity >
            <Text >
                {item.key}
            </Text>
        </TouchableOpacity>

    const Renderitems1 = ({ item }) => {
        return (
            <View style={styles.outerbox}>
            <TouchableOpacity  onPress={()=>navigation.navigate('NewCar')}>
                <Image style={styles.image} source={images.car} />
                </TouchableOpacity>
                <TouchableOpacity                
                style={styles.likebutton} onPress={() => { setLike(!like) }}>
                    {like ? <Image style={styles.like} source={images.icon17} />
                        : <Image style={styles.like} source={images.icon18} />}
                </TouchableOpacity>

                <View style={styles.innerbox}>
                    <Text style={styles.title}>{item.model}</Text>
                    <Text style={styles.paragraph}> {item.paragraph}</Text>
                    <View style={styles.row}>
                        <Text style={styles.Blue}> {item.price}</Text>
                        {item.calculator ?
                        <TouchableOpacity onPress={()=>navigation.navigate('Calculator')}>
                             <Image style={styles.calculator} source={images.icon19} />
                        </TouchableOpacity> : null}
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.blue}>Find Your Perfect Car</Text>
                <View style={styles.row1}>
                    <Text style={styles.bluesmall}>Name</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => { setlist1(!list1) }}>
                        <Entypo name="chevron-small-down" size={30} />
                    </TouchableOpacity>
                </View>
                {/*   {list1 ? <FlatList data={[{key: 'one'}, {key: 'two'}, {key: 'three'}]} renderItem={renderitems}/> : null}
                */}
                <View style={styles.row1}>
                    <Text style={styles.bluesmall}>Model</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Entypo name="chevron-small-down" size={30} />
                    </TouchableOpacity>
                </View>
                <View style={styles.row2}>
                    <View style={styles.row1}>
                        <FontAwesome name="repeat" size={15} color="grey" />
                        <Text style={{ color: colors.DarkGray3 }}>Reset</Text>
                    </View>
                    <TouchableOpacity style={styles.button} 
                    //onPress={()=>navigation.navigate('NewCar')}
                    >
                        <Text style={styles.white}>Search</Text>
                    </TouchableOpacity>
                    <View style={styles.row1}>
                        <Ionicons name="options" size={20} color="grey" />
                        <Text style={{ color: colors.DarkGray3 }}>More Filters</Text>
                    </View>
                </View>

            </View>

            <Text style={styles.text}> Featured</Text>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />
            <Text style={styles.more}>See more amazing cars </Text>

            <Text style={styles.text}>New Arrival</Text>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />
            <Text style={styles.more}>See more amazing cars </Text>

            <Text style={styles.text}>New Arrival</Text>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />
            <Text style={styles.more}>See more amazing cars </Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        shadowColor: '#3D3D3D',
        borderRadius: 25,
        backgroundColor: 'white',
        elevation: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginTop: 10,
        marginHorizontal: 10
    },
    blue: {
        color: colors.Blue,
        fontFamily: 'sans-serif-medium',
        fontSize: 17,
    },
    bluesmall: {
        color: colors.Blue,
        fontSize: 15
    },
    row1: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10
    },
    row2: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        alignItems: 'center'
    },
    btn: {
        borderRadius: 50,
        backgroundColor: '#E8EEF1',
        width: '70%',
        shadowColor: '#3D3D3D',
        elevation: 10,
        alignItems: 'flex-end',
        paddingHorizontal: 10
    },
    button: {
        borderRadius: 50,
        backgroundColor: colors.Blue,
        width:'30%',
        paddingVertical: 8,
        paddingHorizontal: 3,
        marginLeft:10
    },
    white: {
        color: 'white',
        alignSelf: 'center'
    },
    text: {
        fontSize: 18,
        color: colors.Red,
        marginTop: 10,
        fontWeight: "500",
        fontFamily: 'sans-serif-medium',
        marginLeft: 10
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
        marginTop: 10,
        flex: 2,
    },
    likebutton: {
        position: 'absolute',
        height: 50,
        width: 50,
        zIndex: 1,
        top: 80,
        left: Dimensions.get('screen').width / 4 * 1.5
    },
    like: {
        height: '100%',
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    calculator: {
        marginLeft: Dimensions.get('screen').width / 4 * 0.8,
    },
    image: {
        height: 100,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1
    },
    innerbox: {
        padding: 5,
        flex: 1,
        alignItems: 'flex-start',
    },
    title: {
        color: 'black',
        fontFamily: 'sans-serif-medium',
        fontSize: 15
    },
    paragraph: {
        fontSize: 11
    },
    Blue: {
        color: colors.Blue,
        fontSize: 18,
        fontFamily: 'sans-serif-medium',
    },
    more: {
        color: colors.Blue,
        fontSize: 12,
        alignSelf: 'flex-end',
        marginRight: 5
    },
})

export default Used
