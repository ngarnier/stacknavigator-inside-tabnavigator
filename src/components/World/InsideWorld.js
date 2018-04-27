import React from 'react'
import { TouchableOpacity, Text, SafeAreaView } from 'react-native'

export default class World extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => console.log('World')}>
            <Text>This is inside the World component</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}