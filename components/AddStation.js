import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export default function () {
    const [text, onChangeText] =useState("");
    const [lag,setLagState] = useState("");
    const [long,setLongState] =useState("");
  return (
    <View>
       <TextInput
        style={styles.input}
        placeholder="Durak Adı"
        onChangeText={onChangeText}
        value={text}
      />
        <TextInput
        style={styles.input}
        placeholder="Lat"
        onChangeText={setLagState}
        value={lag}
      />
        <TextInput
        style={styles.input}
        placeholder="Long"
        onChangeText={setLongState}
        value={long}
      />
      <TouchableOpacity onPress={() =>{console.log('basıldı')}} style={styles.button}><Text>Ekle</Text></TouchableOpacity>


      

    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button:{
        backgroundColor:'#fff',
        padding:10,
        margin:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#000',
      }
  });