// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomNavigationBar from './components/CustomNavigationBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomNavigationBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
