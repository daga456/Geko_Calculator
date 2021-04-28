import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight, FlatList, SafeAreaView } from 'react-native';
import styles from './Estilos';

import Icon from 'react-native-vector-icons/Ionicons';

const Report = ({navigation, route}) =>{
    
    const[Operaciones, setOperaciones] = useState([]);

    useEffect(()=>{
        if(route.params?.Historial){
            setOperaciones(route.params.Historial)
        }
    }, [route.params?.Historial])

    useEffect(()=>{
        console.log(Operaciones)
        Operaciones.shift()
    }, [Operaciones])

    const Item = ({ title }) => (
        <TouchableOpacity style={styles.item}  >
          <Text style={styles.id}>{title.id}</Text>
          <Text style={styles.Operacion_Fondo}>{title.tipo}</Text>
          <Text style={styles.Operacion_Fondo}>{title.ope}</Text>
        </TouchableOpacity>
    );
      

    const renderItem = ({ item }) => (
        <Item key={item.id} title={item} />
    );

    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:"row", justifyContent:"space-around", paddingTop:10, backgroundColor:"white"}}>
                <Text style={{ fontFamily:"Roboto", color:"#0072B1", fontSize:40, fontWeight: "bold", marginTop:20 }}>Report</Text>
                <TouchableHighlight onPress={()=>(navigation.navigate("Calculator"))} style={{backgroundColor:"#0072B1", padding:15}}>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <Icon name="calculator-outline" size={50} color={"white"} />
                        <Text style={{color:"white", paddingTop:15}}>Calculator</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{flex:1, backgroundColor:"white"}}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={Operaciones}
                    renderItem={renderItem} keyExtractor={item=> item.id.toString()}  />
                </SafeAreaView>
            </View>
        </View>
    );
}

module.exports = Report;