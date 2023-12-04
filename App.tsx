import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { LandingNavigator } from './src/navigator/Navigator';
import { AppProvider } from './src/context/AppContext';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SafeAreaView style={{ flex: 1 }}>
          <LandingNavigator/>
        </SafeAreaView>
        <Toast  config={toastConfig} topOffset={120}/>
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

const toastConfig = {
  error: (props) => {
    return (
      <View
        style={{
          backgroundColor: "#00254b",
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "auto",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          {props?.text1 ? (
            <Text style={{ color: 'white', fontSize: 14, paddingRight: 5 }}>
              {props.text1}
            </Text>
          ) : null}
          {props?.text2 ? (
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                paddingRight: 5,
                fontWeight: "600",
              }}
            >
              {props?.text2}
            </Text>
          ) : null}
        </View>
        <TouchableOpacity onPress={() => props.hide()} activeOpacity={0.7}>
          <Text style={{color: 'white'}}>X</Text>
        </TouchableOpacity>
      </View>
    )
  },
}