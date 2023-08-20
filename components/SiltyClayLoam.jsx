import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function SiltyClayLoam() {
  return (
    <View>
    <Text style={styles.text}>
    Silty clay loam means soil material that contains 27 to 40 percent clay and less than 20 percent sand.
    </Text>
    <Image style={styles.img} source={require('../assets/soil/silty_clay_loam.png')} />
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
export default SiltyClayLoam