import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import HelloHome from './Hello'
import InsideHello from './InsideHello'

const HelloNavigator = StackNavigator({
  Hello: { screen: HelloHome },
  InsideHello: { screen: InsideHello },
})

export default HelloNavigator