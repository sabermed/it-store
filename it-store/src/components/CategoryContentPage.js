import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { COLOURS, Items } from '../data/Data';
import ProductCard from '../components/ProductCard'

export default function CategoryContentPage({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{ padding: 16, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 18, color: COLOURS.black, fontWeight: '700', letterSpacing: 1, }}>
                            Products
                        </Text>
                        <Text style={{ fontSize: 14, color: COLOURS.blue, fontWeight: '700', }}>
                            VIEW ALL
                        </Text>
                    </View>
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});