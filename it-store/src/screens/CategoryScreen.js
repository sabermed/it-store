import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import FBSearchBar from '../components/FBSearchBar';
import Navigation from '../navigation/NavigationStack';

export default function CategoryScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <FBSearchBar/>
            <Navigation />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});