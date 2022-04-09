import { View, Text ,ScrollView} from 'react-native'
import React from 'react'

export default function BottomTabs() {
  return (
    <View style={{marginTop:5, 
        backgroundColor:'#fff',
        paddingVertical:10,
        paddingLeft:20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         
              <View key={index} style={{alignItems:'center',marginRight:30}}>
          <Image source={item.image} style={{
              width:50,
              height:40,
              resizeMode:"contain",
          }}/>
          <Text style={{fontSize:13,fontWeight:"900"}}>{item.text}</Text>
          </View>
          
      
      </ScrollView>
      </View>
  )
}