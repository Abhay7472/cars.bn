import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Notification = () => {
    return (
      <View style={styles.container}>
        <Text>notification Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});