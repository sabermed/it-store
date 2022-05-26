import { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
// import { Items } from '../data/Data';
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function CategoryContentPage({ navigation, category }) {
  let nbItemFound = 0;
  const [Items, setItems] = useState([]);

  const getItems = () => {
    axios.get("http://192.168.43.228:9000/api/products/findAll").then((res) => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {Items.map((data) => {
              if (data.category === category) {
                nbItemFound++;
                return (
                  <ProductCard
                    isCategory={true}
                    navigation={navigation}
                    productItem={data}
                    key={data._id}
                  />
                );
              }
            })}
            {nbItemFound !== 0 ? null : (
              <Text style={{ fontSize: 16, color: "#555" }}>
                No product available
              </Text>
            )}
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
