import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HelpScreen from '../screens/HelpScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductInfo from '../screens/ProductInfo';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import SearchResults from '../screens/SearchResults';
import BottomNavigationBar from './BottomNavigationBar';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AppStack = () =>{
    return (
        <Stack.Navigator initialRouteName='BottomNavigationBar' screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            {/* <Stack.Screen name="Category" component={CategoryScreen} /> */}
            {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
            {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
            <Stack.Screen name='BottomNavigationBar' component={BottomNavigationBar} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="SearchResults" component={SearchResults} />
            <Stack.Screen name="ProductInfo" component={ProductInfo} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    );
}
export default AppStack;
