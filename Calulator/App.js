/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Inicio from './inicio';
import Report from './report';
import Calculator from './calculator';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={{flex:1}}>
      <Image style={{ width: 150, height: 50 }} source={require('./img/Geko.png')} />
    </View>
  );
}

function LogoTitle_Calculator() {
  return (
    <View style={{flex: 1,}}>
      <Image style={{ width: 150, height: 50 }} source={require('./img/Geko.png')} />
      <Text style={{fontSize: 20, color:"green", paddingLeft:20}} >Calculator</Text>
    </View>
  );
}

const BackIcon = () =>{
  return(
      <Icon style={{margin:10}} name="chevron-back-circle-outline" size={45} />
  );
}

const EstiloHeader_Inicio = {
  title: 'My home',
  headerStyle: {
     backgroundColor: '#0072B1', 
    }, 
  headerTintColor: '#0072B1',
 headerTitleStyle: { fontWeight: 'bold', }, 
}

const EstiloHeader_Report = {
  title: 'Report',
  headerStyle: {
     backgroundColor: '#F4F4F4', 
     height:100
    }, 
  headerTintColor: 'black',
 headerTitleStyle: { fontWeight: 'bold', }, 
 headerTitle: props => <LogoTitle {...props} />,

}

const EstiloHeader_Calculator = {
  title: 'Calculator',
  headerStyle: {
     backgroundColor: '#F4F4F4', 
     height:150,
     borderBottomRightRadius:130,
     borderBottomLeftRadius:130
     
    },
  
  headerTintColor: 'black',
 headerTitleStyle: { fontWeight: 'bold' }, 
 headerTitle: props => <LogoTitle_Calculator {...props} />,
}

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#0072B1',
  }};
  
  return (
       <NavigationContainer theme={MyTheme} >
         <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Inicio} options={EstiloHeader_Inicio} />
            <Stack.Screen name="Report" component={Report} options={EstiloHeader_Report} />
            <Stack.Screen name="Calculator" component={Calculator} options={EstiloHeader_Calculator} />
         </Stack.Navigator>
       </NavigationContainer>
  );
};


export default App;
