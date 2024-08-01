// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import SettingsScreen from './screens/SettingsScreen'; // Import additional screen
import CustomNavigationBar from './components/CustomNavigationBar';

const Tab = createBottomTabNavigator();

// Define the role (1 or 2)
const role = 2; // Change this value to test different roles

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomNavigationBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={SecondScreen} />
        {role === 2 && (
          <Tab.Screen name="Settings" component={SettingsScreen} /> // Conditionally render based on role
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
