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

        // Determine the icon name based on the route name
        const iconName = (() => {
          switch (route.name) {
            case 'Home':
              return 'home';
            case 'Profile':
              return 'user';
            case 'Settings':
              return 'cog'; // Assuming 'cog' is the icon name for settings
            default:
              return 'question'; // Fallback icon
          }
        })();

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
              name={iconName}
              size={24} // Decreased icon size
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
    height: 60, // Decreased height
    backgroundColor: '#1f1f1f', // Slightly lighter black
    borderTopColor: '#333',  // Darker border
    borderTopWidth: 1,
    elevation: 5, // Decreased elevation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 }, // Decreased shadow offset
    shadowOpacity: 0.2, // Decreased shadow opacity
    shadowRadius: 5, // Decreased shadow radius
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15, // Decreased padding
  },
  activeTab: {
    backgroundColor: '#444', // Darker background for active tab
    borderRadius: 15, // Reduced border radius
    paddingVertical: 3, // Reduced vertical padding
    borderWidth: 1, // Reduced border width
    borderColor: '#673ab7', // Border color
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
});

export default CustomNavigationBar;
