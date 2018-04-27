import React from 'react'
import { TouchableOpacity, Text, SafeAreaView } from 'react-native'

export default class HelloHome extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('InsideHello')}>
            <Text>This is the home of the Hello component</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}