import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function Loam() {
    return (
        <View>
            <Text style={styles.text}>
                Loam is soil made with a balance of the three main types of soil: sand, silt, and clay soil. As a general rule, loam soil should consist of equal parts of all three soil types. This combination of soil types creates the perfect soil texture for plant growth.
            </Text>
            <Image style={styles.img} source={require('../assets/soil/loam.jpg')} />
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

export default Loam