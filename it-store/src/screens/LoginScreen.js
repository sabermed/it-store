import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import { LinearGradient } from "expo-linear-gradient";
import SocialButton from '../components/SocialButton';
import itStore from '../assets/it-store.png';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
// import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {
  
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const textInputChange = (val) => {
    setData({
      ...data,
      email: val,
    });
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
 
  const loginHandle =  async () => {
    const res = await axios.post("http://192.168.1.14:9000/api/auth/login", {
      email: data.email,
      password: data.password,
    })
    
    if (res.status == 200 && res.data.accessToken != "") {
      await SecureStore.setItemAsync('userToken', res.data.accessToken);
      await SecureStore.setItemAsync('username', res.data.username);
      let result = await SecureStore.getItemAsync('userToken');
      let result2 = await SecureStore.getItemAsync('username');
      console.log(result,result2)
      navigation.navigate("Home")
      
    } else if(res.status == 403){
      console.log(res.data.msg)
    } else if (res.status == 401) {
      console.log(res.data.msg)
    } else {
      console.log("error")
    }
      
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={ itStore }
        style={styles.logo}
      />
      <Text style={styles.text}>               </Text>

      <FormInput
        onChangeText={(val) => textInputChange(val)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        onChangeText={(val) => handlePasswordChange(val)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.signIn}
        onPress={() => {
          loginHandle();
        }}
      >
        <LinearGradient
          colors={["#f3607b", "#fc8783"]}
          style={styles.signIn}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: "#fff",
              },
            ]}
          >
            Sign In
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      

      <Pressable style={styles.forgotButton} onPress={() => {}}>
        <Text style={[styles.navButtonText, {color: "#000"}]}>Forgot Password?</Text>
      </Pressable>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            /*onPress={() => fbLogin()}*/
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            /*onPress={() => googleLogin()}*/
          />
        </View>
      ) : null}

      <View style={[{flexDirection:'row'},styles.forgotButton]}>
        <Text style={styles.navButtonText}>
          Don't have an acount?&nbsp;
        </Text>
        <Text
          style={[styles.navButtonText,{color: "#f3607b"}]}
          onPress={() => navigation.navigate('SignupScreen')}
        >
          Create here
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});