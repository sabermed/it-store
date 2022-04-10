import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackSearchNavBar from "../components/BackSearchNavBar";

export default function SearchScreen({ navigation }) {

    const search_history = [
        "talkie walkie 100km",
        "casque",
        "coquz iphone 12 pro max",
        "coque iphone 13",
        "samsung A50",
    ]

    const search_options = [
        "Souris Red Dragon 2700DPI",
        "iphone 12 pro max",
        "PC Portable HP Notebook 12 16GO RAM",
        "kit-oreille samsung bluetooth",
        "Charge Samsung 5V",
        "Ordinateur bureau Dell i3 7th gén",
        "Casque bluetooth"
    ]

    return (
        <View style={styles.container}>
            <BackSearchNavBar navigation={navigation} />
            <View style={styles.defaultBody}>
                <Text style={{color: "#000", fontSize: 14, fontWeight: "700", paddingHorizontal: 16, paddingVertical:8}}>
                    Historique de recherche
                </Text>
                <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", marginLeft: 16,}}>
                    {search_history.map((item, index) => {
                        return (
                            <Text
                                key={index}
                                numberOfLines={1}
                                style={{
                                    fontSize: 12,
                                    textAlign: "center",
                                    textAlignVertical: 'center',
                                    backgroundColor: "#f2f2f2",
                                    height: 40,
                                    padding: 8,
                                    marginRight: 8,
                                    marginBottom: 8,
                                    borderRadius: 50,
                                }}>
                                {item}
                            </Text>
                        );
                    })}
                </View>
                <Text style={{color: "#000", fontWeight: "700", padding: 16}}>
                    Voir Plus
                </Text>
                <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", marginLeft: 16,}}>
                    {search_options.map((item, index) => {
                        return (
                            <Text
                                key={index}
                                numberOfLines={1}
                                style={{
                                    fontSize: 12,
                                    textAlign: "center",
                                    textAlignVertical: 'center',
                                    backgroundColor: "#f2f2f2",
                                    height: 40,
                                    padding: 8,
                                    marginRight: 8,
                                    marginBottom: 8,
                                    borderRadius: 50,
                                }}>
                                {item}
                            </Text>
                        );
                    })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    defaultBody: {
        flex: 1,
    }
});
