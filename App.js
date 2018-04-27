import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import HelloNavigator from './src/components/Hello'
import World from './src/components/World'

const MainNavigator = TabNavigator({
  Hello: { screen: HelloNavigator },
  World: { screen: World },
});

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
