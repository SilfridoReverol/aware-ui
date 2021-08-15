import React, { useState } from 'react';
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
import MainButton from '../components/MainButton';
import Http from '../services/Http';
import Field from '../components/Fields';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  let passInput = '';

  const submitSignIn = async () => {
    // setLoading(true);
    if (!Field.checkFields([user.email, user.password])) {
      Alert.alert('Empty Field', 'Please, fill the fields');
    } else {
      const data = await Http.send('POST', '/api/users/signin', user);

      if (!data) {
        Alert.alert('Fatal Error', 'No data from server...');
      } else {
        switch (data.typeResponse) {
          case 'Success':
            await AsyncStorage.setItem('user', JSON.stringify(data.body[0]));
            const dataToString = JSON.stringify(data.body[0]);
            console.log(dataToString);
            props.navigation.navigate('HomeDrawer', { screen: 'Home' });
            break;

          case 'Fail':
            data.body.errors.forEach((element) => {
              console(element.text);
            });
            break;

          default:
            Alert.alert(data.typeResponse, data.message);
            break;
        }
      }
    }

    // setLoading(false);
  };

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
            <View style={styles.section}>
              <Ionicons name="mail" size={20} color="black" />
              <TextInput
                placeholder="Email"
                autoCapitalize="none"
                keyboardType={'email-address'}
                autoCorrect={false}
                blurOnSubmit={false}
                style={styles.textInput}
                autoFocus
                onChangeText={(email) => setUser({ ...user, email: email })}
                onSubmitEditing={() => passInput.focus()}
              />
            </View>
            <View style={styles.section}>
              <Ionicons name="ios-lock-closed" size={20} color="black" />
              <TextInput
                ref={(input) => (passInput = input)}
                placeholder="Contraseña"
                autoCapitalize="none"
                style={styles.textInput}
                secureTextEntry
                onChangeText={(password) =>
                  setUser({ ...user, password: password })
                }
                onSubmitEditing={submitSignIn}
              />
            </View>

            <MainButton onPress={() => submitSignIn()}>
              Inicia Sesión
            </MainButton>

            <View style={styles.signUp}>
              <Text style={styles.textSignUp}>No tienes cuenta?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.replace('RegisterStack')}
              >
                <Text
                  style={[
                    styles.textSignUp,
                    { color: '#F8F8FF', marginLeft: 5 },
                  ]}
                >
                  Registrate
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
    justifyContent: 'flex-start',
    direction: 'rtl',
    flexWrap: 'wrap',

    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    padding: 40,
    marginBottom: 30,
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
    backgroundColor: 'rgba(255, 255, 255, 0.70)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    width: 260,
    height: 100,
    marginVertical: 0,
    overflow: 'hidden',
  },
  logoContainer: {
    width: 230,
    height: 150,
    resizeMode: 'contain',
  },
  awareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 15,
    width: 280,
    height: 100,
    marginHorizontal: Dimensions.get('window').width / 5.5,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.28,
  },
  awareImage: {
    width: 180,
    height: 150,
    resizeMode: 'contain',
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'rgba(204, 204, 204, 0.78)',
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
  },
});

export default Login;
