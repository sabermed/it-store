import { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Items } from '../data/Data';
import ProductCard from '../components/ProductCard'

export default function CategoryContentPage({ navigation, category }) {
    let nbItemFound = 0;
    

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
                            if (data.category === category) {
                                nbItemFound++;
                                return <ProductCard isCategory={true} navigation={navigation} productItem={data} key={data.id} />   
                            }
                        })}
                        {nbItemFound !== 0
                            ?
                            null
                            : 
                            <Text style={{fontSize:16, color: "#555"}}>No product available</Text>
                        }
                    </View>
                </View>
            </ScrollView>
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