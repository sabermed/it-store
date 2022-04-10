import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { COLOURS, Items } from '../data/Data';
import ProductCard from '../components/ProductCard'

export default function CategoryContentPage({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16, }}>
                    <View
                        style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        }}>
                        {Items.map(data => {
                        return <ProductCard navigation={navigation} productItem={data} key={data.id} />;
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2eff0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});