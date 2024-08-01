// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from './HomeScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { ShowCustomToast } from '../components/CustomToast'; // Ensure correct import

const HomeScreen = () => {
  const navigation = useNavigation();

  const clickEvent = () => {
    navigation.navigate('Profile');
    ShowCustomToast('success', 'Button Pressed!', 'Navigating to the Second Screen.');
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Click Me" onPress={clickEvent} />
    </View>
  );
};

export default HomeScreen;
