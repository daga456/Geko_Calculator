import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    Texto:{
        color:'blue',
        fontFamily: 'bold',
        fontSize: 30,        
    },
    Entrada:{
        borderColor:'gray',
        width:230,
    },
    Fondo:{
        flex: 5,
        backgroundColor: "#0072B1",
    },
    FondoLogin:{
        width:'85%',
        height:'90%',
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:'space-around',
        padding:0,
    },
    Contorno_img:{
        flex: 1, 
        alignItems: "center",
        justifyContent:"center",
        backgroundColor:"#0072B1",

    },
    Img_inicial:{
        resizeMode:"stretch",
        width:60,
        height:50,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth:0.5,
        borderColor:"gray",
    },
    searchIcon: {
        padding: 5,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#424242',
    },
    Resultado:{
        flex:1,
        alignItems:"center",
        marginTop:30,
        height:30
    },
    Resultado_Texto:{
        fontSize:50,
        color:"white" 
    },
    Panel:{
        flex:5,
        backgroundColor:"#F4F4F4",
        padding:30,
    },
    Forma_Botones:{
        flexDirection:"row",
         justifyContent:"space-between"
    },
    BotonVerde:{
        fontSize:35,
        color:"green",
        padding:10
    },
    Boton_Clear:{
        fontSize:20,
        paddingTop:20,
        color:"green",
        borderWidth:2,
        borderColor:"green",
        padding:10
    },
    Boton_Numeros:{
        fontSize: 35,
        color:"gray",
        padding:10
    },
    Boton_Igual: {
        elevation: 8,
        backgroundColor: "green",
        borderRadius: 100,
        paddingVertical: 15,
        paddingHorizontal: 15
      },
      ButtonText: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
      },
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
      },
      item: {
        flex: 3,
        backgroundColor: 'white', 
        padding: 10,
        marginVertical: 0,
        marginHorizontal: 5,
        flexDirection: "row"
      },
      id: {
        fontSize: 32,
        color: Colors.white,
        backgroundColor:"green",
        padding:15
      },
      Operacion_Fondo:{
        padding:20,
        fontSize: 20,
        color: "gray",
        backgroundColor:"white",
        borderWidth:1,
        borderLeftWidth:0,
        borderColor:'gray'
      }
});

export default styles;