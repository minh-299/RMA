import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen'; 
import ProfileScreen from '../components/ProfileScreen'; 
import SettingsScreen from '../components/SettingsScreen';

import Temperature from '../app/Temperature'; // Adjusted path
import Square from '../app/Square';
import Triangle from '../app/Triangle';
import StepCount  from '../app/StepCount';
import PrimeNumberCheck from '../app/PrimeNumberCheck';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      
      <Tab.Screen name="Square" component={Square} />
      <Tab.Screen name="PrimeNumberCheck" component={PrimeNumberCheck} />
      <Tab.Screen name="Triangle" component={Triangle} />
      <Tab.Screen name="StepCount" component={StepCount} />
      <Tab.Screen name="Temperature" component={Temperature} />
    </Drawer.Navigator>
  );
}
