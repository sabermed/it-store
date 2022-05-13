import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchButton from './SearchButton';

const BackTopNavBar = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Ionicons
            onPress={() => navigation.goBack()}
            style={{ marginHorizontal: 10 }}
            name="arrow-back-outline"
            size={28}
            color={"#000"}
        />
        <SearchButton navigation={navigation} />
        <Ionicons
            onPress={() => { navigation.navigate('CartScreen') }}
            style={{ marginHorizontal: 10 }}
            name="ios-cart-outline"
            size={28}
            color={"#000"}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 10,
    },
});

export default BackTopNavBar