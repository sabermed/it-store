import React from 'react';
import { View, Pressable,TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SearchInput = ({ navigation }) => {
  return (
    <View style={styles.button}>
        <TextInput style={styles.textInput} placeholder={"Search here"} />
        <Pressable style={styles.search_icon_box} onPress={()=>{navigation.navigate("SearchResults")}}>
            <Ionicons name="search" size={22} color={"#ffffff"} style={styles.iconButton} />
        </Pressable>
    </View>
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
    width: "100%",
    maxHeight: 38,
    borderWidth: 2,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: "#777",
    justifyContent: "center",
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

export default SearchInput