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
import RNPickerSelect from 'react-native-picker-select';
import BeckCard from '../components/BeckCard';
import CustomDatePicker from '../components/DatePicker';
import Card from '../components/Card';
import Field from '../components/Fields';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Anamnesis = (props) => {
  const data = props.navigation.getParam('data');
  console.log(data);

  const [becks, setBecks] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    eleven: 0,
    twelve: 0,
    thirteen: 0,
    fourteen: 0,
    fifteen: 0,
    sixteen: 0,
    seventeen: 0,
    eighteen: 0,
    nineteen: 0,
    twenty: 0,
    twentyone: 0,
    totalNum: 0,
    totalResult: '',
    userid: '',
    testDate: '',
    sendDate: '',
  });

  const [total, setTotal] = useState(0);

  const [inputNumber, setInputNumber] = useState(0);

  const getTotal = () => {
    const becksTotal =
      parseInt(becks.one) +
      parseInt(becks.two) +
      parseInt(becks.three) +
      parseInt(becks.four) +
      parseInt(becks.five) +
      parseInt(becks.six) +
      parseInt(becks.seven) +
      parseInt(becks.eight) +
      parseInt(becks.nine) +
      parseInt(becks.ten) +
      parseInt(becks.eleven) +
      parseInt(becks.twelve) +
      parseInt(becks.thirteen) +
      parseInt(becks.fourteen) +
      parseInt(becks.fifteen) +
      parseInt(becks.sixteen) +
      parseInt(becks.seventeen) +
      parseInt(becks.eighteen) +
      parseInt(becks.nineteen) +
      parseInt(becks.twenty) +
      parseInt(becks.twentyone);
    setTotal(becksTotal);
    setInputNumber(inputNumber + 1);
  };

  const goForward = () => {
    setInputNumber(inputNumber + 1);
  };

  const goBack = () => {
    setInputNumber(inputNumber - 1);
  };

  let showInput;

  let showResult;

  const numTotal = total;

  if (inputNumber === 0) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 380 }}>
            <View
              style={{
                padding: 4,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}
              >
                Instrucciones:
              </Text>
              <Text style={{ fontSize: 18 }}>
                Se le presentaran varios cuestionarios con una tematica
                distinta, los cuales serviran para la creacion de su anamnesis y
                envio de esta a su psicologo
              </Text>
            </View>
          </BeckCard>
        </View>

        <MainButton onPress={() => goForward()}>Comenzar</MainButton>
      </View>
    );
  }

  if (inputNumber === 1) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 480 }}>
            <View
              style={{
                padding: 4,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}
              >
                1.- General
              </Text>
              <View style={styles.section}>
                <TextInput
                  placeholder="Nivel Educativo"
                  autoCapitalize="sentences"
                  style={styles.textInput}
                  // onChangeText={(password) =>
                  //   setUser({ ...user, password: password })
                  // }
                  // onSubmitEditing={submitSignIn}
                />
              </View>
              <View style={styles.section}>
                <TextInput
                  placeholder="Ocupaci'on"
                  autoCapitalize="sentences"
                  style={styles.textInput}
                  // onChangeText={(password) =>
                  //   setUser({ ...user, password: password })
                  // }
                  // onSubmitEditing={submitSignIn}
                />
              </View>
              <View style={styles.section}>
                <RNPickerSelect
                  // value={becks.two}
                  placeholder={{
                    label: 'Estado Civil',
                    color: 'black',
                  }}
                  style={{
                    inputIOS: {
                      width: 250,
                      textAlign: 'left',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 10,
                      paddingTop: 3,
                      color: 'black',
                      overflow: 'visible',
                    },
                  }}
                  // onValueChange={(two) => setBecks({ ...becks, two: two })}
                  items={[
                    { label: 'Soltero/a', value: 'Soltero/a' },
                    {
                      label: 'Casado/a',
                      value: 'Casado/a',
                    },
                    { label: 'Union Libre', value: 'Union Libre' },
                    { label: 'Union de Hecho', value: 'Union de Hecho' },
                    {
                      label: 'Separado/a',
                      value: 'Separado/a',
                    },
                    {
                      label: 'Divorciado/a',
                      value: 'Divorciado/a',
                    },
                    {
                      label: 'Viudo/a',
                      value: 'Viudo/a',
                    },
                  ]}
                />
              </View>
              <View style={styles.section}>
                <TextInput
                  placeholder="Religion"
                  autoCapitalize="sentences"
                  style={styles.textInput}
                  // onChangeText={(password) =>
                  //   setUser({ ...user, password: password })
                  // }
                  // onSubmitEditing={submitSignIn}
                />
              </View>
              <View style={styles.section}>
                <TextInput
                  placeholder="Direccion"
                  autoCapitalize="sentences"
                  style={styles.textInput}
                  // onChangeText={(password) =>
                  //   setUser({ ...user, password: password })
                  // }
                  // onSubmitEditing={submitSignIn}
                />
              </View>
            </View>
          </BeckCard>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <MainButton
            style={{ backgroundColor: '#7db780' }}
            onPress={() => goBack()}
          >
            Atras
          </MainButton>
          <MainButton onPress={() => goForward()}>Siguiente</MainButton>
        </View>
      </View>
    );
  }

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
          {showInput}
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
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 550,
    width: 280,
    height: 150,
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

export default Anamnesis;
