import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Button, TextInput, View, Image } from 'react-native';
import styles from './Estilos';

import Icon from 'react-native-vector-icons/Ionicons';

const Login = (props) => {

const [User, setUser] = useState("")
const [Password, setPassword] = useState("")

function cambiar(){
    props.navegar.navigate("Report");
}
  
  return (
        <View style={styles.FondoLogin} >
            <View style={{flex:1, alignItems:"center", paddingTop:50}}>
                <Image source={require("./img/Geko.png")} />
            </View>
            <View style={{justifyContent:"space-around", flex:2}}>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="person" color={"gray"} size={23} />
                    <TextInput placeholder={"Usuario"} style={styles.Entrada} onChangeText={T => setUser(T)} />
                </View>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="lock-closed" color={"gray"} size={23} />
                    <TextInput placeholder={"Password"} secureTextEntry={true} style={styles.Entrada} onChangeText={T => setUser(T)} />
                </View>
            </View>
            <View style={{flex:1, paddingTop:30, width:"80%"}}>
                <Button title="Login" color="green" onPress={()=>(cambiar())} />
            </View>
        </View>
  );
};


export default Login;