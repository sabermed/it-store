import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchInput from './SearchInput';

const BackSearchNavBar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => { navigation.navigate('BottomNavigationBar') }}
        style={{ padding: 5, marginRight: 10 }}
        name="arrow-back-outline"
        size={26}
        color={"#000"}
      />
      <SearchInput navigation={navigation} />
      <Ionicons
        onPress={() => { navigation.navigate('CartScreen') }}
        style={{ marginHorizontal: 10 }}
        name="ios-cart-outline"
        size={36}
        color={"#000"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
});

export default BackSearchNavBar