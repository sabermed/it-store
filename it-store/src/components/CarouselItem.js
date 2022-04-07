import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.item }} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width,
        height: height / 3.5,
        backgroundColor: 'white',
        marginTop: 10,
    },

    image: {
        width: width,
        height: height / 3.5,
    },
});

export default CarouselItem;