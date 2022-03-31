import { View, Text,StyleSheet } from 'react-native'
import { SafeAreaView} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import SafeAreaAndroid from '../components/SafeAreaAndroid'
import React from 'react'
import { useState } from 'react'
import StationPicker from '../components/StationPicker'


export default function Home() {
    /* bu kısma durak verileri çekicez
       ve bu kısmı component olarak ayırcaz    
    */
   
  return (
      <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
            <StationPicker/>
      </SafeAreaView>
  )
}


