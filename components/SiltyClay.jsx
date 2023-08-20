import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function SiltyClay() {
  return (
    <View>
    <Text style={styles.text}>
    Silty clay is a mixture of clay and silt particles. As a combination of the two, silty clay soil has better drainage than clay on its own but also erodes faster. Sandy clay is soil made of mostly clay and sand particles. It is lighter and has better drainage than regular clay because of the high sand content.
    </Text>
    <Image style={styles.img} source={require('../assets/soil/silty_clay.jpg')} />
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
export default SiltyClay