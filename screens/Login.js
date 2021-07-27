import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Login = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/aware-bg.png')}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.logosContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.logoContainer}
                source={require('../assets/nobg-awarelogo.png')}
              />
            </View>
            <View style={{ ...styles.awareContainer }}>
              <Image
                style={styles.awareImage}
                source={require('../assets/aware-nobg.png')}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text>Sign In</Text>
            <Text>Welcome Again to Aware!</Text>

            <View style={styles.section}>
              <Ionicons name="person" size={20} color="black" />
              <TextInput
                placeholder="Email"
                autoCapitalize="none"
                keyboardType={'email-address'}
                blurOnSubmit={false}
                style={styles.textInput}
                autoFocus
                //   onChangeText={(email) => setUser({ ...user, email: email })}
                //   onSubmitEditing={() => passInput.focus()}
              />
            </View>
            <View style={styles.section}>
              <Ionicons name="ios-lock-closed" size={20} color="black" />
              <TextInput
                ref={(input) => (passInput = input)}
                placeholder="Password"
                autoCapitalize="none"
                style={styles.textInput}
                //   secureTextEntry
                //   onChangeText={(password) =>
                //     setUser({ ...user, password: password })
                //   }
                // onSubmitEditing={submitSignIn}
              />
            </View>

            <View style={styles.signUp}>
              <Text style={styles.textSignUp}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.replace('Register')}
              >
                <Text
                  style={[styles.textSignUp, { color: 'white', marginLeft: 3 }]}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logosContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    padding: 40,
    marginTop: 50,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  imageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    width: 280,
    height: 100,
    marginHorizontal: Dimensions.get('window').width / 5.5,
    overflow: 'hidden',
  },
  logoContainer: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
  awareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    width: 280,
    height: 100,
    marginHorizontal: Dimensions.get('window').width / 5.5,
    overflow: 'hidden',
  },
  awareImage: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
  },
  textInput: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
  },
  signUp: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textSignUp: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
});

export default Login;
