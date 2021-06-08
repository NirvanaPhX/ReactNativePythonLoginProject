import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import Nav from './src/pages/nav'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Nav></Nav>
    </View>
  )
}

export default App;