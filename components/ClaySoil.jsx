import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function ClaySoil() {
    return (
        <View>
            <Text style={styles.text}>
                Clay Soil is a heavy soil type that benefits from high nutrients. Clay soils remain wet and cold in winter and dry out in summer. These soils are made of over 25 percent clay, and because of the spaces found between clay particles, clay soils hold a high amount of water.
            </Text>
            <Image style={styles.img} source={require('../assets/soil/clay_soil.png')} />
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
export default ClaySoil