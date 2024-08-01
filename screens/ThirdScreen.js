// screens/ThirdScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThirdScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Settings Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ThirdScreen;
