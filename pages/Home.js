import { View, Text,StyleSheet } from 'react-native'
import { SafeAreaView,TouchableOpacity} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import SafeAreaAndroid from '../components/SafeAreaAndroid'
import React from 'react'
import { useState,useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import StationPicker from '../components/StationPicker'
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'
import axios from 'axios'


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


