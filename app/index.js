
import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from '../navigation/StackNavigator'
import TabNavigator from '../navigation/TabNavigator'
import DrawerNavigator from '../navigation/DrawerNavigator'



const index = () => {
  return (
      <TabNavigator ></TabNavigator>
  )
}

export default index