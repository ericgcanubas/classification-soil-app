import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function SandyClayLoam() {
  return (
    <View>
    <Text style={styles.text}>
    Sandy clay loam means soil material that contains 20 to 35 percent clay, less than 28 percent silt, and 45 percent or more sand.
    </Text>
    <Image style={styles.img} source={require('../assets/soil/sandy_clay_loam.jpg')} />
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
export default SandyClayLoam