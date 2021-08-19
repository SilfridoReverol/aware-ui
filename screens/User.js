import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BeckCard from '../components/BeckCard';
import MainButton from '../components/MainButton';

const User = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/aware-bg-2.png')}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.contentContainer}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Ionicons name="person-circle-outline" size={100} color="black" />
              <Text style={{ fontSize: 30 }}>Silfrido Reverol</Text>
              <BeckCard style={{ height: 70, marginTop: 30 }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'center',
                      fontWeight: '300',
                    }}
                  >
                    Estado de la anamnesis: Enviado
                  </Text>
                </View>
              </BeckCard>
              <BeckCard style={{ height: 70, marginTop: 30, marginBottom: 20 }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'center',
                      fontWeight: '300',
                    }}
                  >
                    # Inventarios de Beck: 2
                  </Text>
                </View>
              </BeckCard>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <View
                  style={{ flex: 1, height: 1, backgroundColor: 'black' }}
                />
                <View>
                  <Text style={{ width: 50, textAlign: 'center' }}>
                    Ajustes
                  </Text>
                </View>
                <View
                  style={{ flex: 1, height: 1, backgroundColor: 'black' }}
                />
              </View>
            </View>
            <ScrollView>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.inputContainer}>
                  <View style={styles.section}>
                    <Ionicons name="mail" size={20} color="black" />
                    <TextInput
                      // ref={(input) => (passInput = input)}
                      placeholder="Nuevo Email"
                      autoCapitalize="none"
                      keyboardType="email-address"
                      style={styles.textInput}
                      // onChangeText={(password) =>
                      //   setUser({ ...user, password: password })
                      // }
                    />
                  </View>
                  <View style={styles.section}>
                    <Ionicons name="mail" size={20} color="black" />
                    <TextInput
                      // ref={(input) => (passInput = input)}
                      placeholder="Nuevo Email del Doctor"
                      autoCapitalize="none"
                      keyboardType="email-address"
                      style={styles.textInput}
                      // onChangeText={(password) =>
                      //   setUser({ ...user, password: password })
                      // }
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{ width: 200, paddingRight: 5, paddingLeft: 10 }}
                  >
                    <View style={styles.section}>
                      <Ionicons
                        name="ios-lock-closed"
                        size={20}
                        color="black"
                      />
                      <TextInput
                        // ref={(input) => (passInput = input)}
                        placeholder="Contraseña actual"
                        autoCapitalize="none"
                        style={styles.textInput}
                        secureTextEntry
                        // onChangeText={(password) =>
                        //   setUser({ ...user, password: password })
                        // }
                      />
                    </View>
                  </View>

                  <View
                    style={{ width: 200, paddingLeft: 5, paddingRight: 10 }}
                  >
                    <View style={styles.section}>
                      <Ionicons
                        name="ios-lock-closed"
                        size={20}
                        color="black"
                      />
                      <TextInput
                        // ref={(input) => (passInput = input)}
                        placeholder="Nueva contraseña"
                        autoCapitalize="none"
                        style={styles.textInput}
                        secureTextEntry
                        // onChangeText={(password) =>
                        //   setUser({ ...user, password: password })
                        // }
                      />
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <MainButton
                    style={{ backgroundColor: '#74b58b', width: 300 }}
                  >
                    Guardar Cambios
                  </MainButton>
                </View>
                <View style={{ marginTop: 10 }}>
                  <MainButton
                    style={{ backgroundColor: '#F47174', width: 300 }}
                  >
                    Cerrar Sesion
                  </MainButton>
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

User.navigationOptions = (navData) => {
  return {
    headerTitle: () => <Text style={{ fontSize: 24 }}>Perfil</Text>,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  logosContainer: {
    justifyContent: 'flex-start',
    direction: 'rtl',
    flexWrap: 'wrap',

    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    padding: 1,
    width: 320,
    marginBottom: 2,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
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
    height: 300,

    overflow: 'hidden',
  },
  logoContainer: {
    width: 230,
    height: 150,
    resizeMode: 'contain',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  awareImage: {
    width: 180,
    height: 40,
    resizeMode: 'contain',
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
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

export default User;
