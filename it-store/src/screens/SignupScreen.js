import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButton";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const SignupScreen = ({ navigation }) => {
  const [passwordmatch, setPasswordmatch] = useState(true);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    check_emailInputChange: false,
  });

  const Signupfunction = () => {
    if (
      data.check_emailInputChange == true &&
      data.check_textInputChange == true &&
      passwordmatch == true
    ) {
      axios
        .post("http://192.168.43.228:9000/api/auth/register", {
          username: data.username,
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          if (res.status == 200) {
            navigation.navigate("LoginScreen");
          } else if (res.status == 403) {
            console.log(res.data.msg);
          } else {
            console.log("error");
          }
        });
    } else {
      ToastAndroid.show("please enter correct input", ToastAndroid.SHORT);
    }
  };

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const emailInputChange = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(val) === false) {
      setData({
        ...data,
        email: val,
        check_emailInputChange: false,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_emailInputChange: true,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
    checkpasswordmatch(val);
  };

  const checkpasswordmatch = (val) => {
    if (data.password === val) {
      console.log("match");
      setPasswordmatch(true);
    } else {
      console.log("no match");
      setPasswordmatch(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        onChangeText={(val) => textInputChange(val)}
        placeholderText="Username"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        onChangeText={(val) => emailInputChange(val)}
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

      {passwordmatch == false ? (
        <Text style={{ color: "red", margin: 0 }}>password does not match</Text>
      ) : null}

      <FormInput
        onChangeText={(val) => handleConfirmPasswordChange(val)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.signUp}
        onPress={() => {
          Signupfunction();
        }}
      >
        <LinearGradient colors={["#f3607b", "#fc8783"]} style={styles.signUp}>
          <Text
            style={[
              styles.textSign,
              {
                color: "#fff",
              },
            ]}
          >
            Sign Up
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{" "}
        </Text>
        <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
          Privacy Policy
        </Text>
      </View>

      {Platform.OS === "android" ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />

          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <View style={[{ flexDirection: "row" }, styles.forgotButton]}>
        <Text style={styles.navButtonText}>Have an acount?&nbsp;</Text>
        <Text
          style={[styles.navButtonText, { color: "#f3607b" }]}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000000",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 16,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    color: "grey",
  },
  signUp: {
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
