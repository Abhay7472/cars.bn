import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Message = () => {
    return (
      <View style={styles.container}>
        <Text>message Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});