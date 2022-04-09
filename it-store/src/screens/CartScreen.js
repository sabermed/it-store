import { View, Text } from 'react-native';

export default function CartScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Cart Screen</Text>
        </View>
    );
}