import React from 'react'
import { TouchableOpacity, Text, SafeAreaView } from 'react-native'

export default class Hello extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => console.log('Hello')}>
            <Text>This is inside the Hello component</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}