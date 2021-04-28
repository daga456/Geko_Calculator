import 'react-native-gesture-handler'
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from './Estilos';
import Login from './login';

import Icon from 'react-native-vector-icons/Ionicons';

const Inicio = ({navigation, route}) =>{
    return(
        <View style={{flex: 1}} >
        <View style={styles.Contorno_img}>
            <Image source={require("./img/flecha.png")} style={styles.Img_inicial} />
        </View>
        <View style={styles.Fondo} >
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Login navegar={navigation} />
          </View>
        </View>
      </View>
    )
}

module.exports = Inicio;