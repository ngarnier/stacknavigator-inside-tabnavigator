import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import WorldHome from './World'
import InsideWorld from './InsideWorld'

const WorldNavigator = StackNavigator({
  World: { 
    screen: WorldHome, 
    navigationOptions: {
      header: 'none',
    }, 
  },
  InsideWorld: { screen: InsideWorld },
})

export default WorldNavigator