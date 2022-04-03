import { StyleSheet, View, Text } from 'react-native';

export default function CategoryItem({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Category Screen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});