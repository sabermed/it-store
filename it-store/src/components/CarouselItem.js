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
        width: width-20,
        height: 150,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
});

export default CarouselItem;