import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatusBadge from '../components/StatusBadge';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBadge status="High" />
      <StatusBadge status="Medium" />
      <StatusBadge status="ASAP" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
