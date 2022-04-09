import { View, TextInput } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import { SafeAreaView ,TouchableOpacity,Text} from 'react-native';
import SafeAreaAndroid from '../components/SafeAreaAndroid';
import { useFetch } from '../hooks/useFetch';


export default function Login({ navigation}) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const loginCheck = () =>{
      if(username=='admin' && password=='admin'){
        navigation.navigate('AdminScreens');
      }
      else{
        navigation.navigate('Screens');
      }
    }
   

  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
        <View style={{marginTop:250}}>
        <View style={{margin:'auto',marginVertical:5,borderStyle:'solid',borderRadius:15,borderColor:'black',borderWidth:1.0}}>
        <TextInput
        style={{height: 40,padding:5}}
        placeholder="Username"
        onChangeText={newText => setUsername(newText)}
        defaultValue={username}
        maxLength={25}
      />
      </View>
      <View style={{margin:'auto',marginVertical:5,borderStyle:'solid',borderRadius:15,borderColor:'black',borderWidth:1.0}}>
        <TextInput
        style={{height: 40,padding:5}}
        placeholder="Password"
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
        maxLength={25}
        secureTextEntry={true}
      />
      </View>
      </View>
      <TouchableOpacity style={{backgroundColor:   "#D18CE0",
                              paddingVertical:6,
                              paddingHorizontal:16,
                              borderRadius:30, 
                              height:35,
                              width:100 ,
                              alignSelf:'center' ,
                              marginTop:10                                                      
  }}
  onPress={() => loginCheck()}
    ><Text style={{color: "black",textAlign:'center'}}>Giriş Yap</Text></TouchableOpacity>
    </SafeAreaView>
  )
}