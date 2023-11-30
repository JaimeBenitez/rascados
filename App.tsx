import React from 'react'
import { SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { LandingNavigator } from './src/navigator/Navigator';
import { AppProvider } from './src/context/AppContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SafeAreaView style={{ flex: 1 }}>
          <LandingNavigator/>
        </SafeAreaView>
      </AppState>
    </NavigationContainer>
  )
}

export default App


const AppState = ({ children }: any) => {
  return(
  <AppProvider>
    { children}
  </AppProvider>
  )
}