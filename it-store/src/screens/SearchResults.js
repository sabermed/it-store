import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import BackTopNavBar from "../components/BackTopNavBar";
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function SearchResults({ route, navigation }) {
  const { word } = route.params;
  const [items, setItems] = useState([]);

  const getItems = () => {
    axios
      .get(`http://192.168.43.228:9000/api/products/searchProducts`, {
        params: { word: word },
      })
      .then((res) => {
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
    getItems();
  }, []);

  return (
    <View style={styles.container}>
      <BackTopNavBar navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {items.map((data) => {
              return (
                <ProductCard
                  isCategory={true}
                  navigation={navigation}
                  productItem={data}
                  key={data._id}
                />
              );
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
    alignItems: "center",
    justifyContent: "center",
  },
});
