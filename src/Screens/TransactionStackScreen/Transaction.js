import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Transaction = () => {
    return (
      <View style={styles.container}>
        <Text>Transation Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});