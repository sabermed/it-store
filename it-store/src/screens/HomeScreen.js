import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
// import custom components
import { COLOURS, images } from '../data/Data';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import TopNavBar from '../components/TopNavBar';
import axios from 'axios';


const { width } = Dimensions.get('window');
const height = width * 0.5;
    
export default function HomeScreen({ navigation }) {
    const [Items, setItems] = useState([]);

    const getItems = () => {
        axios.get("http://192.168.1.14:9000/api/products/findAll").then((res) => {
            if (res.status == 200) {
                return setItems(res.data);
            } else if (res.status == 403) {
                return console.log("error" + res);
            } else {
                return console.log("error");
            }
        });
    };

    useEffect(() => {
        getItems()
    }, [])
    
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
                        return <ProductCard navigation={navigation} productItem={data} key={data._id} />;
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
                        return <ProductCard navigation={navigation} productItem={data} key={data._id} />;
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