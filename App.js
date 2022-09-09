import * as React from 'react';
import { RootNavigation } from './src/navigation/RootNavigation'
import { NativeBaseProvider, Text, Box } from "native-base";
import { View, ActivityIndicator, StyleSheet,StatusBar } from 'react-native';
import { store } from './src/store/store'
import { Provider } from 'react-redux'



const App = () => {
  return (<>
 <Provider store={store}>

   <NativeBaseProvider>
   <StatusBar
      
      backgroundColor="royalblue"
      barStyle="light-content"



/>
    <RootNavigation />
    </NativeBaseProvider>

 </Provider>
  </>
  )
}
export default App

const styles = StyleSheet.create({})







