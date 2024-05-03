import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import '../../globals.css';

export default Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="home" />
        <Tabs.Screen name="auth" />
        <Tabs.Screen name="list" />
    </Tabs>
  )
}