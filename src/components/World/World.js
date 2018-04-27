import React from 'react'
import { TouchableOpacity, Text, SafeAreaView } from 'react-native'

export default class WorldHome extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('InsideWorld')}>
            <Text>This is the home of the World component</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}