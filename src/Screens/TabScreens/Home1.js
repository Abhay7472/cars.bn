import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home1 = () => {
    return (
      <View style={styles.container}>
        <Text>Home1</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default Home1;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});