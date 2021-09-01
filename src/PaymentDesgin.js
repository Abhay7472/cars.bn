import React, { useState } from "react";
import { Image, View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
 
import images from "./constants/Images";
import Ionicons from 'react-native-vector-icons/Ionicons';


const DATA = [
    {
        id: "1",
        day:'Today',                
        title: "$25000.00",
        paragraph: '  You have recived $25000.00 from the buyer',
        body: 'Abhishek',
        icon: <Ionicons name="chevron-forward-outline" size={30}/>

    },
    {
        id: "2",
        title: "$100.00",
        paragraph: ' you paid $100.00 in he Auction',

    },
    {
        id: "3",
        title: "$25000.00",
        paragraph: '  You have recived $25000.00 from the buyer',
        body: 'Abhishek',

    },
    {
        id: "4",
        title: "$100.00",
        paragraph: ' you paid $100.00 in he Auction',
    },
    {
        id: "5",
        title: "$25000.00",
        paragraph: '  You have recived $25000.00 from the buyer',
        body: 'Abhishek',
    },
    {
        id: "6",
        title: "$100.00",
        paragraph: ' you paid $100.00 in he Auction',
    },
    {
        id: "7",
        title: "$25000.00",
        paragraph: '  You have recived $25000.00 from the buyer',
        body: 'Abhishek',
    },
    {
        id: "8",
        title: "$100.00",
        paragraph: ' you paid $100.00 in he Auction',
    },
    {
        id: "9",
        title: "$25000.00",
        paragraph: '  You have recived $25000.00 from the buyer',
        body: 'Abhishek',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
       {/* <Text style={{color:"red"}}> Today</Text> */}
       <Text style={[styles.title, { color:"black",fontSize:15}]}> {item.day}</Text>
        <Text style={[styles.title, { color: "#213884", fontWeight: 'bold' }]}> {item.title}</Text>
        <Text style={[styles.paragraph, { color: "#0ca70c" }]}>{item.paragraph} </Text>
        
        <Text style={[styles.paragraph, { color: "#0ca70c" }]}>{item.body}</Text>
    </TouchableOpacity>
);

const Payment = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "lightgrey" : "#fff";
        const color = item.id === selectedId ? 'white' : 'black';


        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (

        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={images.union} style={styles.img}></Image>
                    <Text style={styles.text}>  Payments</Text>
                </View>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 28,
    },
    paragraph: {
        fontSize: 16
    },
    img: {
        marginTop: 5,
        marginLeft: 20,
        marginRight: 5
    },
    text: {
        marginLeft: 10,
        fontSize: 20,
        color: "#213884" ,
        
        fontWeight: "bold",
    },

});

export default Payment;


 