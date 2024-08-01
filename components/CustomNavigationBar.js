// components/CustomNavigationBar.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomNavigationBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title;
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={label}
            onPress={onPress}
            style={[
              styles.tab,
              isFocused ? styles.activeTab : styles.inactiveTab,
            ]}
          >
            <Icon
              name={index === 0 ? 'home' : 'user'}
              size={24}
              color={isFocused ? '#fff' : '#888'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: '#000', // Black background
    borderTopColor: '#444',  // Darker border
    borderTopWidth: 1,
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow radius
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  activeTab: {
    backgroundColor: '#333', // Darker background for active tab
    borderRadius: 10,
  },
  inactiveTab: {
    backgroundColor: 'transparent', // Transparent background for inactive tabs
  },
});

export default CustomNavigationBar;
