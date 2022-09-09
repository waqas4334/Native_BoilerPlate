import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Bsdk} from '../components/atoms/Bsdk'
import Chutiya from '../components/atoms/Chutiya'

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer  initialRouteName="Bsdk">
      <Stack.Navigator>
        <Stack.Screen name="Hello" component={Bsdk}
         options={{ headerShown: false }} />

        
        <Stack.Screen name="chutiya" component={Chutiya} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}





    





