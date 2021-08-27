import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RequestStatus = () => {
    return (
      <View style={styles.container}>
        <Text>Request Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default RequestStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
 