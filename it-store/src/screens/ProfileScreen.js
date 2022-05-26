import { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleNavBar from "../components/SimpleNavBar";

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState("");
  const getUser = async () => {
    SecureStore.getItemAsync("username").then((res) => {
      console.log(res);
      setUser(res);
    });
  };
  const signOut = async () => {
    await SecureStore.deleteItemAsync("userToken");
    await SecureStore.deleteItemAsync("username");
    await SecureStore.deleteItemAsync("userId");
    setUser("");
    navigation.reset({
      index: 1,
      routes: [{ name: "BottomNavigationBar" }],
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (user == "") {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
        }}
      >
        <SimpleNavBar navigation={navigation} pageName="Profile" />
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingTop: 40,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                paddingHorizontal: 8,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "700" }}>Welcome</Text>
              <Text style={{ fontSize: 16, fontWeight: "400" }}>
                {user == "" ? "Sign In to your account" : user}
              </Text>
            </View>
            {user == null ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    height: 50,
                    paddingHorizontal: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      color: "#f3607b",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Sign In
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  signOut();
                }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    height: 50,
                    paddingHorizontal: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#e2e2e2",
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      color: "#f3607b",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Sign Out
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>

          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#fff",
              margin: 16,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 10,
                borderBottomWidth: 0.5,
                borderBottomColor: "#ccc",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700" }}>My Orders</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "700" }}>
                  View all
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={22}
                  color={"#ccc"}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 30,
                paddingHorizontal: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  onPress={() => {
                    /*navigation.navigate('CartScreen')*/
                  }}
                  style={{ marginHorizontal: 10 }}
                  name="wallet"
                  size={48}
                  color={"#f3607b"}
                />
                <Text style={{ fontSize: 12 }}>Not payed</Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  onPress={() => {
                    /*navigation.navigate('CartScreen')*/
                  }}
                  style={{ marginHorizontal: 10 }}
                  name="truck-delivery"
                  size={48}
                  color={"#f3607b"}
                />
                <Text style={{ fontSize: 12 }}>pending</Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  onPress={() => {
                    /*navigation.navigate('CartScreen')*/
                  }}
                  style={{ marginHorizontal: 10 }}
                  name="truck-check"
                  size={48}
                  color={"#f3607b"}
                />
                <Text style={{ fontSize: 12 }}>Delivered</Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  onPress={() => {
                    /*navigation.navigate('CartScreen')*/
                  }}
                  style={{ marginHorizontal: 10 }}
                  name="star"
                  size={48}
                  color={"#f3607b"}
                />
                <Text style={{ fontSize: 12 }}>Feedback</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#fff",
              margin: 16,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700" }}>Settings</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 14,
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "400" }}>Details</Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={22}
                  color={"#ccc"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 14,
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  Change Address
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={22}
                  color={"#ccc"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 14,
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 0.5,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  Change Payment Method
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={22}
                  color={"#ccc"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 14,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "400" }}>
                  Change Password
                </Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={22}
                  color={"#ccc"}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
