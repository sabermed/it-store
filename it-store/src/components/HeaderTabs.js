import { StyleSheet, Text, View } from 'react-native';

export default function HeaderTabs() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>iT Store</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        padding: 15,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
    }
});
