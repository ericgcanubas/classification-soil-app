import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
function ClayLoam() {
    return (
        <View>
            <Text style={styles.text}>
                Clay loam has a whopping 27-40% clay to 20-45% sand ratio. It is moderately resistant to forming a ribbon but, in the end, also makes 1.5-2.5 inch ribbon that is smooth and shiny. The official abbreviation is CL. Silty clay loam soil has 27-40% clay but a sand content of less than 20%.
            </Text>
            <Image style={styles.img} source={require('../assets/soil/clay_loam.jpg')} />
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


export default ClayLoam