import {useState, useRef} from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, Animated } from 'react-native';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Data'

// import Custom components
import FBSearchBar from '../components/FBSearchBar'

const { width } = Dimensions.get('window');
const height = width * 0.5;
    
export default function HomeScreen({ navigation }) {
    const images = [
        "https://rukminim1.flixcart.com/flap/3376/560/image/813ce1ebdfb5d14d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1688/280/image/5a55bfde3a5acd85.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1688/280/image/b16c5ac856ebb5d9.jpg?q=50"
    ];
    
    return (
        <View style={styles.container}>

            <FBSearchBar />
            <View>
                <Carousel data = {images}/>
            </View>

            {/* Fake Post list */}
            <View style={styles.fake_post} />
            <View style={styles.fake_post} />
            <View style={styles.fake_post} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carousel: {
        marginTop: 16,
        width,
        height,
    },
    scroll: {
        width,
        height,
    },
    image: {
        width,
        height,
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    pagingText: {
        fontSize: width / 30,
        color: '#888',
        margin: 3,
    },
    pagingActiveText: {
        fontSize: width / 30,
        color: '#fff',
        margin: 3,
    },
    fake_post: {
        backgroundColor: '#e4e6eb',
        height: 200,
        margin: 16,
        borderRadius: 16,
    },
})