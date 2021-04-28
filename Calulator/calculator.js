import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './Estilos';

let Numerador = 0;

const Calculator = ({navigation, route}) => {

    const [numUno, setNumUno] = useState("");
    const [numDos, setNumDos] = useState("");
    const [Resultado, setResultado] = useState("");
    const [Numero, setNumero] = useState("");
    const [Operador, setOperador] = useState("");
    const [Historial, setHistorial] = useState([]);
    const [tipo, setTipo] = useState("");

    useEffect(()=>{
        setResultado(numUno + " " + Operador + " " + numDos)
    },[numUno, Operador, numDos])

    useEffect(()=>{
        setResultado(numUno + " " + Operador + " " + numDos + " = " + Numero)
    },[Numero])

    useEffect(()=>{
        Numerador+=1;
        setHistorial([...Historial, {ope:numUno + " " + Operador + " " + numDos + " = " + Numero, id:Numerador, tipo:tipo}])
    },[Numero])
    

    function Asignar(_num){
        if (Operador == ""){ 
            setNumUno(numUno + _num);
        }else{
            setNumDos(numDos+_num);
        }
    }

    function Limpiar(){
        setNumUno("");
        setNumDos("");
        setResultado("");
        setOperador("");
    }

    function Operacion(_Simbolo){
        if(isNaN(parseFloat(numUno))){
            alert("Falta el primer operador");
            return;
        }
        switch (_Simbolo) {
            case "+":
                setOperador("+");
                setTipo("Addition");
                break;
            case "-":
                setOperador("-");
                setTipo("Subtraction");
                break;
            case "X":
                setTipo("Multiplication");
                setOperador("X");
                break;
            case "/":
                setTipo("Division");
                setOperador("/");
                break;
            case "%":
                setTipo("Percent");
                setOperador("%");
                break;
            default:
                break;
        }   
    }

    function Operar(_Primero, _Segundo){
        
        if (isNaN(_Primero) ||  isNaN(_Segundo)){
            alert("Falta valores");
            Limpiar()
            return;
        }
        switch (Operador) {
            case "+":
                setNumero(_Primero + _Segundo);
                break;
            case "-":
                setNumero(_Primero - _Segundo);
                break;
            case "X":
                setNumero(_Primero * _Segundo);
                break;
            case "/":
                    try {
                        if (_Segundo == 0){
                            alert("Imposible de hacer")
                            setNumero("")
                        }else{
                            setNumero(_Primero / _Segundo);
                        }
                    } catch (error) {
                        alert("Imposible de hacer")
                        setNumero(0)
                    }
                break;
            case "%":
                setNumero((_Primero * _Segundo) / 100);
                break;
            default:
                break;
        }
    }

    function Eliminar_Registros(){
        Limpiar();
        setHistorial([]);
    }

    return(
        <View style={{flex:1}}>
            <View style={styles.Resultado} >
                <Text style={styles.Resultado_Texto} > {Resultado} </Text>
            </View>
            <View style={styles.Panel}>
                <View style={styles.Forma_Botones}>
                    <Text onPress={()=>Limpiar()} style={styles.BotonVerde}>C</Text>
                    <Text onPress={()=>Eliminar_Registros()} style={styles.Boton_Clear}>Clear</Text>
                    <Text onPress={()=>Operacion("%")} style={styles.BotonVerde}>%</Text>
                    <Text onPress={()=>Operacion("/")} style={styles.BotonVerde}>/</Text>
                </View>
                <View style={styles.Forma_Botones}>
                    <Text onPress={()=>Asignar("7")} style={styles.Boton_Numeros}>7</Text>
                    <Text onPress={()=>Asignar("8")} style={styles.Boton_Numeros}>8</Text>
                    <Text onPress={()=>Asignar("9")} style={styles.Boton_Numeros}>9</Text>
                    <Text onPress={()=>Operacion("X")} style={styles.BotonVerde}>X</Text>
                </View>
                <View style={styles.Forma_Botones}>
                    <Text onPress={()=>Asignar("4")} style={styles.Boton_Numeros}>4</Text>
                    <Text onPress={()=>Asignar("5")} style={styles.Boton_Numeros}>5</Text>
                    <Text onPress={()=>Asignar("6")} style={styles.Boton_Numeros}>6</Text>
                    <Text onPress={()=>Operacion("-")} style={styles.BotonVerde}>-</Text>
                </View>
                <View style={styles.Forma_Botones}>
                    <Text onPress={()=>Asignar("1")} style={styles.Boton_Numeros}>1</Text>
                    <Text onPress={()=>Asignar("2")} style={styles.Boton_Numeros}>2</Text>
                    <Text onPress={()=>Asignar("3")} style={styles.Boton_Numeros}>3</Text>
                    <Text onPress={()=>Operacion("+")} style={styles.BotonVerde}>+</Text>
                </View>
                <View style={styles.Forma_Botones}>
                    <Text onPress={ () => (navigation.navigate("Report", {Historial:Historial})) } style={styles.BotonVerde}>Atras</Text>
                    <Text onPress={()=>Asignar("0")} style={styles.Boton_Numeros}>0</Text>
                    <Text onPress={()=>Asignar(".")} style={styles.Boton_Numeros}>.</Text>
                    <TouchableOpacity  onPress={()=>Operar(parseFloat(numUno), parseFloat(numDos))} style={styles.Boton_Igual}>
                        <Text style={styles.ButtonText}>=</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

module.exports = Calculator;
