import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchBarButton from '../components/SearchBarButton';

const TopNavBar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SearchBarButton navigation={navigation} />
      <Ionicons onPress={()=>{navigation.navigate('CartScreen')}} style={{ marginHorizontal:10 }} name="ios-cart-outline" size={36} color={"red"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10
  },
});

export default TopNavBar