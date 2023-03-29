import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Chocolate from './chocolate';
import Fuba from './fuba';
import Milho from './milho';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Chocolate" component={Chocolate}/>
        <Stack.Screen name="Milho" component={Milho}/>
        <Stack.Screen name="Fuba" component={Fuba}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}