import React, { Component } from 'react';
import{TouchableOpacity} from 'react-native';
import { StyleSheet,Image, Text,Button, TextInput, View } from "react-native";
import { Theme } from "../../constants/Theme";

export default function DocReg ()   
    {
        return(
            <View >
				
				<View style="{{width:70}}">
				<Image
					source={{
						uri: 'http://cliparts101.com/files/367/63BA654AECB7FD26A32D08915C923030/avatar_nick.png',
					}}
					style={{marginTop:10, width: 120, height: 120, borderRadius: 50}}
				/>
			</View>
                <TextInput style={styles.textInput} placeholder="Name"></TextInput>
                <TextInput style={styles.textInput} placeholder="City"></TextInput>
                <TextInput style={styles.textInput} placeholder="Email"></TextInput>
				<TextInput style={styles.textInput} placeholder="mobile number"></TextInput>
                <TextInput style={styles.textInput} placeholder="Department"></TextInput>
                
                
                
				
            </View>)

    }
    
const styles = StyleSheet.create({
   
    header:{
        alignSelf:"center",
        fontSize:35,

    },
    textInput: {
            borderBottomWidth: 3,
            height: 40,
			padding:10
    }, 
    
   
    })
 