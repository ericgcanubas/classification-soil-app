import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function SiltyLoam() {
  return (
    <View>
    <Text style={styles.text}>
    Silty loam comprised mainly of intermediate sized particles, are fertile, fairly well drained and hold more moisture than sandy soils but are easily compacted. Loams are comprised of a mixture of clay, sand and silt that avoid the extremes of clay or sandy soils and are fertile, well-drained and easily worked.
    </Text>
    <Image style={styles.img} source={require('../assets/soil/silty_loam.png')} />
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
export default SiltyLoam