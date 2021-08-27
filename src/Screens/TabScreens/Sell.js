import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Sell = () => {
    return (
      <View style={styles.container}>
        <Text>sell</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default Sell;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});