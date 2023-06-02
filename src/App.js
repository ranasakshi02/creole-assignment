import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavContainer from './navigation/NavContainer'

const App = () => {
  return (
    <NavigationContainer>
        <NavContainer />
      </NavigationContainer>
  )
}

export default App