import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, StatusBar } from 'react-native';
import AppStack from "./src/navigation/AppStack";

export default function App() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    }
})