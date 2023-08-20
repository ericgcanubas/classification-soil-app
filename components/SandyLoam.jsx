import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function SandyLoam() {
    return (
        <View>
            <Text style={styles.text}>
                Sandy loam is a type of soil used for gardening. This soil type is normally made up of sand along with varying amounts of silt and clay. Many people prefer sandy loam soil for their gardening because this type of soil normally allows for good drainage.
            </Text>
            <Image style={styles.img} source={require('../assets/soil/sandy_loam.png')} />
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
export default SandyLoam