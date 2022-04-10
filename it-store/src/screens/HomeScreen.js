import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
// import custom components
import { COLOURS, Items, images } from '../data/Data';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import TopNavBar from '../components/TopNavBar';


const { width } = Dimensions.get('window');
const height = width * 0.5;
    
export default function HomeScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
            <TopNavBar navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Carousel data = {images}/>
                <View style={{padding: 16}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: 24, color: "#000", fontWeight: '700', }}>
                            New Products
                        </Text>
                        <Text style={{ fontSize: 16, color: "red", fontWeight: '400',}}>
                            View All
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
                        {Items.map(data => {
                        return <ProductCard navigation={navigation} productItem={data} key={data.id} />;
                        })}
                    </View>
                    {/* Trending Products */}
                    <View style={{ marginTop: 36, marginBottom: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 24, color: "#000", fontWeight: '700',}}>
                            Trending Products
                        </Text>
                        <Text style={{ fontSize: 16, color: "red", fontWeight: '400', }}>
                            View All
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
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
        backgroundColor: '#e9e9e9'
    },
})