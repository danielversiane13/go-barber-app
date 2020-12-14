import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import HooksProvider from './hooks'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <HooksProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </HooksProvider>
    </NavigationContainer>
  )
}

export default App
