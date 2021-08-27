import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const MyPost = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>My post Screen</Text>
        <Button
            title="Go to MY post screen...again"
            onPress={() => navigation.goBack("MyPost")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default MyPost;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});