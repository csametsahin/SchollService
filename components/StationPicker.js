import { View, Text,StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { useState ,useEffect} from 'react'
import { Button } from 'react-native';
import  axios  from 'axios';
import { TouchableOpacity } from 'react-native';
export default function StationPicker() {
    const [selectedValue, setSelectedValue] = useState("izmit");

  return (
<>
    <View style={styles.container}>
         <View >
           <Text>Durak Seçiniz..</Text>
         <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >     
        <Picker.Item label="İzmit" value="izmit" />
        <Picker.Item label="Gebze" value="gebze" />
      </Picker>
        </View>
    </View>
     <View><TouchableOpacity onPress={() =>{console.log('basıldı')}} style={styles.button}><Text>Rezervasyon Al</Text></TouchableOpacity></View>
     </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center",
    },
    button:{
      backgroundColor:'#fff',
      padding:10,
      margin:150,
      borderRadius:10,
      borderWidth:1,
      borderColor:'#000',

     
    }
  });