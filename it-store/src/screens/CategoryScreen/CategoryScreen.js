import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import TopNavBar from '../../components/TopNavBar';
import SibeBarNavigation from './SibeBarNavigation';

export default function CategoryScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <TopNavBar navigation={navigation} />
            <SibeBarNavigation />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2eff0'
    },
});