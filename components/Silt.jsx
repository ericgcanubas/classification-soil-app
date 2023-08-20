import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function Silt() {
  return (
    <View>
    <Text style={styles.text}>
    Silt is granular material of a size between sand and clay and composed mostly of broken grains of quartz. Silt may occur as a soil (often mixed with sand or clay) or as sediment mixed in suspension with water. Silt usually has a floury feel when dry and lacks plasticity when wet. Silt also can be felt by the tongue as granular when placed on the front teeth (even when mixed with clay particles).
    </Text>
    <Image style={styles.img} source={require('../assets/soil/silt.jpg')} />
</View>
  )
}
const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
        marginRight: 10,

    },
    img: {
        marginRight: 10,
        marginLeft: 10,
        height: 200,
        width: 340,
        marginBottom: 50,
    },

});
export default Silt