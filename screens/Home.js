import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MainButton from '../components/MainButton';
import Http from '../services/Http';
import Card from '../components/Card';
import Field from '../components/Fields';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const asyncFunctionData = async () => {
      try {
        const storageData = await AsyncStorage.getItem('user');
        setData(JSON.parse(storageData));
      } catch (e) {}
    };
    asyncFunctionData();
  }, [setData]);

  const goToAnamnesis = () => {
    props.navigation.navigate({ routeName: 'Anamnesis', params: { data } });
  };

  const goToBecks = () => {
    props.navigation.navigate({ routeName: 'Becks', params: { data } });
  };

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
          <View
            style={{
              justifyContent: 'flex-start',
              padding: 20,
            }}
          >
            <Text style={{ fontSize: 25 }}>Hola {data.first_name},</Text>
            <Text style={{ fontSize: 25 }}>Que deseas hacer hoy?</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ padding: 10 }}>
                <Card
                  style={{
                    width: 260,
                    height: 490,
                    marginBottom: 15,
                    padding: 40,
                  }}
                  // onPress={() => props.navigation.navigate('Anamnesis')}
                >
                  <View style={styles.contentContainer}>
                    <Image
                      style={styles.awareImage}
                      source={require('../assets/anamnesis-nobg.png')}
                    />
                  </View>
                  <View style={{ marginTop: 22 }}>
                    <Text
                      numberOfLines={8}
                      style={{
                        fontSize: 20,
                        textAlign: 'left',
                        lineHeight: 30,
                      }}
                    >
                      Consiste en un cuestionario, el cual te permitira proveer
                      informacion necesaria con el objetivo de mejorar el
                      tratamiento psicologico.
                    </Text>
                  </View>
                  <View style={{ marginTop: 30 }}>
                    <MainButton onPress={() => goToAnamnesis()}>
                      <Ionicons name="arrow-forward" size={24} color="black" />
                    </MainButton>
                  </View>
                </Card>
              </View>

              <View style={{ padding: 10 }}>
                <Card
                  style={{
                    width: 260,
                    height: 490,
                    marginBottom: 15,
                    padding: 40,
                  }}
                  // onPress={() => props.navigation.navigate('Anamnesis')}
                >
                  <View style={styles.contentContainer}>
                    <Image
                      style={styles.awareImage}
                      source={require('../assets/becks-nobg.png')}
                    />
                  </View>
                  <View style={{ marginTop: 22 }}>
                    <Text
                      numberOfLines={10}
                      style={{
                        fontSize: 20,
                        textAlign: 'left',
                        lineHeight: 30,
                      }}
                    >
                      El inventario de Beck es un cuestionario autoadministrado
                      que consta de 21 preguntas de respuesta múltiple y tiene
                      como objetivo medir la severidad de la depresion.
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <MainButton onPress={() => goToBecks()}>
                      <Ionicons name="arrow-forward" size={24} color="black" />
                    </MainButton>
                  </View>
                </Card>
              </View>
            </ScrollView>
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

    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  awareImage: {
    width: 180,
    height: 40,
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

export default Home;
