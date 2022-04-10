import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SearchButton = ({ navigation }) => {
  return (
    <Pressable style={styles.button}  onPress={() => { navigation.navigate('SearchScreen') }}>
        <Text style={styles.textInput} >Search here</Text>
        <View style={styles.search_icon_box} >
          <Ionicons name="search" size={22} color={"#ffffff"} style={styles.iconButton} />
        </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: "red",
    borderWidth: 2,
    width: "100%",
    maxHeight: 38,
  },
  textInput: {
    paddingHorizontal: 10,
    color: "#777"
  },
  search_icon_box: {
    width: 50,
    height: 30,
    margin: 2,
    borderRadius: 50,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchButton