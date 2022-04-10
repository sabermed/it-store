import { View, Text } from 'react-native';

export default function SearchResults({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Search Results Screen</Text>
        </View>
    );
}