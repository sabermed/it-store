import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SearchBarButton = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}  onPress={() => { navigation.navigate('SearchScreen') }}>
        <Text style={styles.textInput} >Seach here</Text>
        <View style={styles.search_icon_box} >
          <Ionicons name="search" size={22} color={"#ffffff"} style={styles.iconButton} />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderColor: "red",
    borderWidth: 2,
  },
  button: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 50,
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

export default SearchBarButton