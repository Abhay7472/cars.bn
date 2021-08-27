import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AskAdmin = () => {
    return (
      <View style={styles.container}>
        <Text>AskAdmin Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default AskAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
 