import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function SandyClay() {
  return (
    <View>
    <Text style={styles.text}>
    The sandy clay surface soil layers have a moderate ability to hold nutrients and leaching is less severe. Low levels of phosphorus, calcium, potassium, Sulphur, nitrogen and trace elements of copper and molybdenum have been recorded. Surface soils are the most fertile and have the highest levels of organic matter.
    </Text>
    <Image style={styles.img} source={require('../assets/soil/sandy_clay.png')} />
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

export default SandyClay