import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SimpleNavBar = ({ navigation, pageName }) => {

  return (
    <View style={styles.container}>
      <Text style={{ color: "#000000", fontSize: 22, fontWeight: "700", paddingHorizontal: 16 }}>{ pageName }</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons
          onPress={() => { navigation.navigate('SearchScreen') }}
          name="search"
          size={22}
          color={"#000000"}
          style={{ paddingHorizontal: 16 }}
        />
        <Ionicons
          onPress={() => { navigation.navigate('CartScreen') }}
          style={{ marginHorizontal: 10 }}
          name="ios-cart-outline"
          size={36}
          color={"#000000"}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 16,
  },
});

export default SimpleNavBar