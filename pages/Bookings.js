import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';

export default function Bookings() {
    /*Araç onayları geldi mi onaylandı mı görüntüleme ekranı*/
  return (
    <View style={styles.container}>
         <MapView 
            style={{height:'50%',width:'100%'}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });