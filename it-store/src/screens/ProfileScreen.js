import * as React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
        </View>
    );
}