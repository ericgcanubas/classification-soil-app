import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function Sand() {
    return (
        <View>
            <Text style={styles.text}>
            Sand is a granular material composed of finely divided mineral particles. Sand has various compositions but is defined by its grain size. Sand grains are smaller than gravel and coarser than silt. Sand can also refer to a textural class of soil or soil type.
            </Text>
            <Image style={styles.img} source={require('../assets/soil/sand.png')} />
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
export default Sand