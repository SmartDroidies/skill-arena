import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { ProfileContainer, } from "../../../../style";
 
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [google, setGoogle] = useState("");
  const [apple, setApple] = useState("");

 
  return (
    <ProfileContainer>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          label="Username*"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
          />
      </View> 
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View>
      <Button
        titleStyle={styles.link}
        title="Froget Password"
        onPress={() => navigation.navigate("ForgetPassword")}
      />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Sign In With Google"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(google) => setGoogle(google)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Sign In With Apple"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(apple) => setApple(apple)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SignIn</Text>
      </TouchableOpacity>

      <View >
        <Button
        type="clear"
        titleStyle={styles.link}
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </ProfileContainer>
  );
}
const styles = StyleSheet.create({
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});



