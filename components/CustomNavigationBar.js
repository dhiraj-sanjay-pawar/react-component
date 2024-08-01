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
              size={30} // Increased icon size
              color={isFocused ? '#fff' : '#b0b0b0'} // Slightly lighter inactive color
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
    height: 70, // Increased height for better spacing
    backgroundColor: '#1f1f1f', // Slightly lighter black
    borderTopColor: '#333',  // Darker border
    borderTopWidth: 1,
    elevation: 10, // Increased elevation for more shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, // Increased shadow offset
    shadowOpacity: 0.3, // Increased shadow opacity
    shadowRadius: 10, // Increased shadow radius
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Increased padding
  },
  activeTab: {
    backgroundColor: '#444', // Darker background for active tab
    borderRadius: 20, // Increased border radius for more rounded effect
    paddingVertical: 5, // Added vertical padding
    borderWidth: 2, // Added border width
    borderColor: '#673ab7', // Border color
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
});

export default CustomNavigationBar;
