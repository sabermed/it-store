import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from '../navigation/NavigationStack';

export default function CategoryScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
            <Navigation />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
});