import { View, Text,StyleSheet } from 'react-native'
import { SafeAreaView} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import SafeAreaAndroid from '../components/SafeAreaAndroid'
import React from 'react'
import { useState } from 'react'
export default function StationPicker() {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
         <View style={styles.container}>
         <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >     
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center",
    }
  });