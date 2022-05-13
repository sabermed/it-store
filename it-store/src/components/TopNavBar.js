import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchButton from './SearchButton';

const TopNavBar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SearchButton navigation={navigation} />
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
    alignItems: 'center',
    justifyContent: "space-between",
    padding: 10,
  },
});

export default TopNavBar