import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import { Link, Redirect } from "expo-router";
import { ScrollView } from "react-native";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const [customId, setCustomId] = useState(null); // State to hold custom_id after login

  const handleLogin = async () => {
    try {
      console.log("login"), setLoading(true);
      const response = await axios.post(
        "http://192.168.12.119:8000/api/login-api",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("Login successful:", response.data);
      setLoggedIn(true); // Update login status upon successful login
      setCustomId(response.data.user.custom_id); // Store custom_id in state
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
        console.error("Status Code:", error.response.status);
        setErrorMessage("Login failed. Please check your credentials.");
      } else if (error.request) {
        console.error("No Response from Server:", error.request);
        setErrorMessage("No response from server. Please try again later.");
      } else {
        console.error("Axios Error:", error.message);
        setErrorMessage("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loggedIn) {
    // Redirect to home screen upon successful login
    return <Redirect href="../screen/home" />;
  } else {
    return (
      <ScrollView>
        <View>
          <View
            style={{
              alignItems: "flex-start",
              padding: 10,
              marginLeft: 20,
            }}
          >
            <Text style={styles.containTitle}>Welcome!</Text>
            <Text style={styles.containText}>Please Login</Text>
            <Text style={styles.containText}>To Your Account</Text>
          </View>

          <View style={styles.container}>
            <Image
              source={require("../../../assets/images1/login.jpg")}
              style={{
                width: "100%",
                height: 300,
              }}
            />
            <View
              style={{
                backgroundColor: "#F5FCFF",
                width: "100%",
                padding: 24,
                alignItems: "center",
                gap: 10,
              }}
            >
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
              />
              <Button
                title="Login"
                onPress={handleLogin}
                color="#1E90FF"
                disabled={loading}
              />
              {errorMessage ? (
                <Text style={{ color: "red", marginTop: 10 }}>
                  {errorMessage}
                </Text>
              ) : null}
              <Link
                href="/home/register"
                style={{ color: "#1E90FF", marginTop: 10 }}
              >
                Go to Register
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  containTitle: {
    fontSize: 50,
    fontWeight: "bold",
  },
  containText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
