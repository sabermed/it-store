import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen({ navigation }) {
    const [user, setUser] = React.useState("");
    const getUser = async () => {
        let res = await SecureStore.getItemAsync('username');
        setUser(res)
    }
    const signOut = async () => {
        await SecureStore.deleteItemAsync('userToken')
        await SecureStore.deleteItemAsync('username')
        setUser("")
        navigation.navigate('LoginScreen')
    };
    React.useEffect(() => {
        getUser()
    })

    return (
        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: "center",
                    alignItems: "center",}}>
            
            {user != "" ? 
                <View style={{backgroundColor: '#f2f2f2', paddingHorizontal:16, paddingVertical: 36}}>
                    <Text style={{ fontSize: 28, fontWeight: "700" , marginBottom: 30}}>Welcome {user}</Text>
                    <TouchableOpacity
                        onPress={()=>{signOut()}}
                        style={{
                        width: 200,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}>
                        <LinearGradient
                            colors={["#ccc", "#ccc"]}
                            style={{
                                width: 200,
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10,
                            }}
                        >
                            <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold", }}>
                                Sign Out
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            :
                <TouchableOpacity
                    onPress={()=>{navigation.navigate("LoginScreen")}}
                    style={{
                    width: 200,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                }}>
                    <LinearGradient
                        colors={["#f3607b", "#fc8783"]}
                        style={{
                            width: 200,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                        }}
                    >
                        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", }}>
                            Sign In
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            }
        </View>
    );
}