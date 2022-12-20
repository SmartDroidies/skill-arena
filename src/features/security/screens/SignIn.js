import React from "react";
import { View, Button, TextInput } from "react-native";
import { ProfileContainer, ProfileTitle } from "../../../../style";

export default class SignUp extends React.Component {
  // state = {
  //     username: '', password: '', email: '', google: '', facebook: ''
  // }
  // onChangeText = (key, val) => {
  //     this.setState({ [key]: val })
  // }
  // signUp = async () => {

  //      const { username, password, email, google, facebook } = this.state
  //     try {
  //         // here place your signup logic
  //         ('user successfully signed up!: ', success)
  //     } catch (err) {
  //         ('error signing up: ', err)
  //     }
  // }

  render() {
    return (
      <View>
        <ProfileTitle>
          <TextInput
            By
            using
            our
            services
            you
            are
            agreeing
            to
            our
            TEAMS
            and
            PRIVACY
            STATEMENT
          />
        </ProfileTitle>
        <ProfileContainer>
          <ProfileTitle>
            <TextInput
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="blue"
              onChangeText={(val) => this.onChangeText("username", val)}
            />
          </ProfileTitle>
          <ProfileTitle>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="blue"
              onChangeText={(val) => this.onChangeText("password", val)}
            />
          </ProfileTitle>
          <ProfileTitle>
            <TextInput
              placeholder="Sign In With Email"
              autoCapitalize="none"
              placeholderTextColor="blue"
              onChangeText={(val) => this.onChangeText("email", val)}
            />
          </ProfileTitle>
          <ProfileTitle>
            <TextInput
              placeholder="Sign In With Google"
              autoCapitalize="none"
              placeholderTextColor="blue"
              onChangeText={(val) => this.onChangeText("google", val)}
            />
          </ProfileTitle>
          <ProfileTitle>
            <TextInput
              placeholder="Sign In With facebook"
              autoCapitalize="none"
              placeholderTextColor="blue"
              onChangeText={(val) => this.onChangeText("facebook", val)}
            />
          </ProfileTitle>
        </ProfileContainer>
        <Button title="Sign Up" onPress={this.signUp} />
        <Button title="create An Account" onPress={this.createAnAccount} />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//     input: {
//         width: 400,
//         height: 55,
//         backgroundColor: '#0000ff',
//         margin: 10,
//         padding: 8,
//         color: 'white',
//         borderRadius: 14,
//         fontSize: 20,
//         fontWeight: '400',
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })
