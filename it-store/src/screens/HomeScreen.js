import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import Custom components
import FBSearchBar from '../components/FBSearchBar'

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>

            <FBSearchBar />
            
            {/* Fake Post list */}
            <View style={styles.fake_post} />
            <View style={styles.fake_post} />
            <View style={styles.fake_post} />
        </View>
    );
}

const styles = StyleSheet.create({
    fake_post: {
        backgroundColor: '#e4e6eb',
        height: 200,
        margin: 16,
        borderRadius: 16,
    }
})