import React, { Component } from 'react';
import{TouchableOpacity} from 'react-native';
import { Alert, StyleSheet, Text,Button, TextInput, View } from "react-native";

    
    const DocReg = () => {
        const showAlert = () =>{
           Alert.alert(
              'Registation Complete')}
    
    return(
            <View >
                <TextInput style={styles.textInput} placeholder="Enter your name"></TextInput>
                <TextInput style={styles.textInput} placeholder="Enter your email"></TextInput>
                <TextInput style={styles.textInput} placeholder="Enter City name"></TextInput>
                <TextInput style={styles.textInput} placeholder="Enter your Department"></TextInput>
                <TextInput style={styles.textInput} placeholder="Registration no"></TextInput>
                <TextInput style={styles.textInput} placeholder="Mobile no."></TextInput>
                <TextInput style={styles.textInput} placeholder="Gender"></TextInput>
                <TextInput style={styles.textInput} placeholder="Year in medical practies"></TextInput>
                <TextInput style={styles.textInput} placeholder="Medical Qualification"></TextInput>
                
    
          
                <TouchableOpacity onPress = {showAlert} style = {styles.btn}>
                <Text style={styles.btnText} >Submit</Text> 
                </TouchableOpacity>
            </View>
            )
        }
const styles = StyleSheet.create({
    DocReg:{
            alignSelf:'stretch',
    },
    header:{
        alignSelf:"center",
        fontSize:35,
        fontWeight:"bold",
        color: 'blue',

    },
    textInput: {
            marginTop:10,
            marginBottom:10,
            borderBottomWidth: 1,
            margin: 15,
            height: 30,
            borderColor: 'darkblue',
            borderWidth: 1,
    }, 
    btn:{
        borderWidth:2,
        borderRadius:10,
        width:120,
        height:40,
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:"#7a42f4",
       
    },
    btnText:{
        fontSize:25,
        fontWeight:"bold",
        color: 'white',

    },
    })
    export default DocReg;