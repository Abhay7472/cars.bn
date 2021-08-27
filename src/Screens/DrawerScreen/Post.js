 import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const Post = () => {
    return (
      <View style={styles.container}>
        <Text> post</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});;

 