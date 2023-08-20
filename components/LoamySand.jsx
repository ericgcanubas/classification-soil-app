import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function LoamySand() {
  return (
    <View>
    <Text style={styles.text}>
    Loamy sand means soil material that contains at the upper limit 85 to 90 percent sand, and the percentage silt plus 1.5 times the percentage of clay is not less than 15; at the lower limit it contains not less than 70 to 85 percent sand, and the percentage of silt plus twice the percentage of clay does not exceed 30.
    </Text>
    <Image style={styles.img} source={require('../assets/soil/loamy_sand.jpg')} />
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
export default LoamySand