import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { COLOURS } from "../data/Data";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default function CartScreen({ navigation }) {
  const [items, setItems] = useState();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [userId, setUserId] = useState("");
  const shippingTax = 10.0;

  //getting user id from async storage
  const getUser = async () => {
    SecureStore.getItemAsync("userId").then((res) => {
      console.log(res);
      setUserId(res);
    });
  };

  //get data from local DB by ID
  const getDataFromDB = async () => {
    getUser().then(() => {
      axios
        .get(`http://192.168.1.14:9000/api/carts/find/${userId}`)
        .then(function (res) {
          let dt = [];
          if (res.status == 200) {
            res.data.map((item, index) => {
              item.products.map((elem, i) => {
                dt.push(elem);
              });
            });
            setItems(dt);
            getTotal(dt);
          } else {
            return console.log("error" + res);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };

  //get total price of all items in the cart
  const getTotal = (productData) => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setSubTotal(total);
    setTotal(total + shippingTax);
  };

  //change Quantity
  const changeQte = async (data, qteAction) => {
    if (userId == null) {
      navigation.navigate("LoginScreen");
    } else {
      axios
        .post(`http://192.168.1.14:9000/api/carts/createUpdate/${userId}`, {
          productId: data.productId,
          qteAction: qteAction,
        })
        .then(function (res) {
          if (res.status == 200) {
            getDataFromDB();
          } else {
            return console.log("error" + res);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  //remove item from Cart
  const removeItemFromCart = async (id) => {
    if (userId == null) {
      navigation.navigate("LoginScreen");
    } else {
      axios
        .post(`http://192.168.1.14:9000/api/carts/delete/${userId}`, {
          productId: id,
        })
        .then(function (res) {
          if (res.status == 200) {
            getDataFromDB();
          } else {
            return console.log("error" + res);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  //checkout
  const checkOut = async () => {
    if (userId == null) {
      navigation.navigate("LoginScreen");
    } else {
      //remove item from cart then
      ToastAndroid.show("item will be Deliverd SOON!", ToastAndroid.SHORT);
      navigation.navigate("Home");
    }
  };

  // render cart items
  const renderProducts = (data, index) => {
    return (
      <View
        key={data._id}
        style={{
          width: "100%",
          height: 100,
          marginVertical: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductInfo", { productID: data.productId })
          }
          style={{
            width: "30%",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}
        >
          <Image
            source={{ uri: data.productImage }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: "100%",
                color: COLOURS.black,
                fontWeight: "600",
                letterSpacing: 1,
              }}
            >
              {data.productName}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                opacity: 0.6,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  maxWidth: "85%",
                  marginRight: 4,
                }}
              >
                {data.productPrice} TND
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => changeQte(data, -1)}
                style={{
                  borderRadius: 100,
                  marginRight: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                  opacity: 0.5,
                }}
              >
                <MaterialCommunityIcons
                  name="minus"
                  style={{
                    fontSize: 16,
                    color: COLOURS.backgroundDark,
                  }}
                />
              </TouchableOpacity>
              <Text>{data.quantity}</Text>
              <TouchableOpacity
                onPress={() => changeQte(data, 1)}
                style={{
                  borderRadius: 100,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                  opacity: 0.5,
                }}
              >
                <MaterialCommunityIcons
                  name="plus"
                  style={{
                    fontSize: 16,
                    color: COLOURS.backgroundDark,
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(data._id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: COLOURS.backgroundDark,
                  backgroundColor: COLOURS.backgroundLight,
                  padding: 8,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getDataFromDB();
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundDark,
                padding: 12,
                backgroundColor: COLOURS.backgroundLight,
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              color: COLOURS.black,
              fontWeight: "700",
            }}
          >
            Orders details
          </Text>
          <View></View>
        </View>

        <Text
          style={{
            fontSize: 22,
            color: COLOURS.black,
            fontWeight: "400",
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginVertical: 16,
          }}
        >
          My Cart
        </Text>
        <View style={{ paddingHorizontal: 16 }}>
          {userId != null && items ? (
            items.map(renderProducts)
          ) : (
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                opacity: 0.5,
                padding: 16,
              }}
            >
              your cart is empty
            </Text>
          )}
        </View>

        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: "400",
                marginBottom: 20,
              }}
            >
              Delivery Location
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
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
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLOURS.black,
                      fontWeight: "500",
                    }}
                  >
                    2 Petre Melikishvili St.
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOURS.black,
                      fontWeight: "400",
                      lineHeight: 20,
                      opacity: 0.5,
                    }}
                  >
                    0162, Tbilisi
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{ fontSize: 22, color: COLOURS.black }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: "400",
                marginBottom: 20,
              }}
            >
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
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
                    borderRadius: 10,
                    marginRight: 18,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "900",
                      color: COLOURS.blue,
                      letterSpacing: 1,
                    }}
                  >
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLOURS.black,
                      fontWeight: "500",
                    }}
                  >
                    Visa Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOURS.black,
                      fontWeight: "400",
                      lineHeight: 20,
                      opacity: 0.5,
                    }}
                  >
                    ****-9092
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{ fontSize: 22, color: COLOURS.black }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: "400",
                marginBottom: 20,
              }}
            >
              Order Info
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.black,
                  opacity: 0.5,
                }}
              >
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: COLOURS.black,
                  opacity: 0.8,
                }}
              >
                {subTotal} TND
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 22,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.black,
                  opacity: 0.5,
                }}
              >
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: COLOURS.black,
                  opacity: 0.8,
                }}
              >
                {shippingTax} TND
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  maxWidth: "80%",
                  color: COLOURS.black,
                  opacity: 0.5,
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: COLOURS.black,
                }}
              >
                {total} TND
              </Text>
            </View>
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
          onPress={() => checkOut()}
          style={{
            width: "86%",
            height: "90%",
            // backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            colors={["#f3607b", "#fc8783"]}
            style={{
              width: "86%",
              height: "90%",
              // backgroundColor: COLOURS.blue,
              borderRadius: 20,
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
              CHECKOUT ({total} TND)
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
