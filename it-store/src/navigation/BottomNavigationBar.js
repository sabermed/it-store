import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();


export default function BottomNavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),

        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-grid-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}