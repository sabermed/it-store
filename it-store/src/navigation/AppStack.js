import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BottomNavigationBar from './BottomNavigationBar';
import CategoryContentPage from '../components/CategoryContentPage';

const Stack = createStackNavigator();

const AppStack = () =>{
    return (
        <Stack.Navigator initialRouteName='BottomNavigationBar' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='BottomNavigationBar' component={BottomNavigationBar} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}
export default AppStack;
