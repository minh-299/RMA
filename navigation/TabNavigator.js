import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';
import ProfileScreen from '../components/ProfileScreen';
import { Ionicons } from '@expo/vector-icons'; // Sử dụng các biểu tượng từ thư viện Ionicons

import Temperature from '../app/Temperature'; // Adjusted path
import Square from '../app/Square';
import Triangle from '../app/Triangle';
import StepCount  from '../app/StepCount';
import PrimeNumberCheck from '../app/PrimeNumberCheck';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Square') {
            iconName = focused ? 'square' : 'square-outline';
          } else if (route.name === 'PrimeNumberCheck') {
            iconName = focused ? 'primeNumberCheck' : 'calendar-number-outline';
          } else if (route.name === 'Triangle') {
            iconName = focused ? 'triangle' : 'triangle-outline';
          }else if (route.name === 'StepCount') {
            iconName = focused ? 'stepcount' : 'footsteps-outline';
          }else if (route.name === 'Temperature') {
            iconName = focused ? 'temperature' : 'flame-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Square" component={Square} />
      <Tab.Screen name="PrimeNumberCheck" component={PrimeNumberCheck} />
      <Tab.Screen name="Triangle" component={Triangle} />
      <Tab.Screen name="StepCount" component={StepCount} />
      <Tab.Screen name="Temperature" component={Temperature} />
    </Tab.Navigator>
  );
}
