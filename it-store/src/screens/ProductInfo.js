import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from "react-native";
import { COLOURS, Items } from "../data/Data";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const ProductInfo = ({ route, navigation }) => {
  const { productID } = route.params;
  const [productItem, setItem] = useState([]);
  const [userId, setUserId] = useState("");

  const getUser = async () => {
    SecureStore.getItemAsync("userId").then((res) => {
      console.log(res);
      setUserId(res);
    });
  };

  const getItem = () => {
    getUser().then(() => {
      axios
        .get(`http://192.168.43.228:9000/api/products/find/${productID}`)
        .then((res) => {
          if (res.status == 200) {
            return setItem(res.data);
          } else if (res.status == 403) {
            return console.log("error" + res);
          } else {
            return console.log("error");
          }
        });
    });
  };

  const width = Dimensions.get("window").width;
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  //product image horizontal scroll
  const renderProduct = ({ item, index }) => {
    return (
      <View
        key={index}
        style={{
          width: width,
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: item }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };

  //add to cart
  const addToCart = async () => {
    if (userId == null) {
      navigation.navigate("LoginScreen");
    } else {
      axios
        .post(`http://192.168.43.228:9000/api/carts/createUpdate/${userId}`, {
          productId: productID,
          productName: productItem.productName,
          productPrice: productItem.productPrice,
          productImage: productItem.productImage,
          quantity: 1,
          qteAction: 1,
        })
        .then(function (res) {
          if (res.status == 200) {
            ToastAndroid.show(
              "Item Added Successfully to cart",
              ToastAndroid.SHORT
            );
            navigation.navigate("CartScreen");
          } else {
            return console.log("error" + res);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOURS.white,
        position: "relative",
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: COLOURS.backgroundLight,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 16,
              paddingLeft: 16,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: COLOURS.backgroundDark,
                  padding: 12,
                  backgroundColor: COLOURS.white,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={
              productItem.productImageList ? productItem.productImageList : null
            }
            horizontal
            renderItem={renderProduct}
            keyExtractor={(productItem, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 32,
            }}
          >
            {productItem.productImageList
              ? productItem.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: "16%",
                        height: 2.4,
                        backgroundColor: COLOURS.black,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}
                    ></Animated.View>
                  );
                })
              : null}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Entypo
              name="shopping-cart"
              style={{
                fontSize: 18,
                color: COLOURS.green,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
              }}
            >
              Shopping
            </Text>
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "600",
              letterSpacing: 0.5,
              marginVertical: 4,
              color: COLOURS.black,
              maxWidth: "84%",
            }}
          >
            {productItem.productName}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: COLOURS.black,
              fontWeight: "400",
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "90%",
              maxHeight: 200,
              marginVertical: 16,
            }}
          >
            {productItem.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 14,
              borderBottomColor: COLOURS.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  color: COLOURS.blue,
                  backgroundColor: COLOURS.backgroundLight,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              >
                <Entypo
                  name="location-pin"
                  style={{
                    fontSize: 24,
                    color: "black",
                  }}
                />
              </View>
              <Text> Rustaveli Ave 57,{"\n"}17-001, Batume</Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: COLOURS.backgroundDark,
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                maxWidth: "85%",
                color: COLOURS.black,
                marginBottom: 4,
              }}
            >
              {productItem.productPrice} TND
            </Text>
            <Text>
              Tax Rate 2% ~ {productItem.productPrice / 20} TND &nbsp;(
              {productItem.productPrice + productItem.productPrice / 20} TND)
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => (productItem.isAvailable ? addToCart() : null)}
          style={{
            width: "86%",
            height: "90%",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            colors={
              productItem.isAvailable
                ? ["#f3607b", "#fc8783"]
                : ["#c2c2c2", "#c2c2c2"]
            }
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                letterSpacing: 1,
                color: COLOURS.white,
                textTransform: "uppercase",
              }}
            >
              {productItem.isAvailable ? "Add to cart" : "🚫 Not Avialable"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;
