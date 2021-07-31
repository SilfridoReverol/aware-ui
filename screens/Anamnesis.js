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
import Http from '../components/Http';
import RNPickerSelect from 'react-native-picker-select';
import BeckCard from '../components/BeckCard';
import CustomDatePicker from '../components/DatePicker';
import Card from '../components/Card';
import Field from '../components/Fields';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Anamnesis = (props) => {
  const data = props.navigation.getParam('data');

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

  if (numTotal >= 1 && numTotal <= 10) {
    showResult = <Text>Estos altibajos se consideran normales</Text>;
  }

  if (numTotal >= 11 && numTotal <= 16) {
    showResult = <Text>Alteración leve del estado de ánimo</Text>;
  }

  if (numTotal >= 17 && numTotal <= 20) {
    showResult = <Text>Depresión clínica leve</Text>;
  }

  if (numTotal >= 21 && numTotal <= 30) {
    showResult = <Text>Depresión moderada</Text>;
  }

  if (numTotal >= 31 && numTotal <= 40) {
    showResult = <Text>Depresión severa</Text>;
  }

  if (numTotal > 40) {
    showResult = <Text>Depresión extrema</Text>;
  }

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
                Este cuestionario consta de 21 grupos de afirmaciones. Por
                favor, lea con atención cada uno de ellos cuidadosamente. Luego
                elija uno de cada grupo, el que mejor describa el modo como se
                ha sentido las últimas dos semanas, incluyendo el día de hoy.
                Marque con un círculo el número correspondiente al enunciado
                elegido Si varios enunciados de un mismo grupo le parecen
                igualmente apropiados, marque el número más alto.
              </Text>
            </View>
          </BeckCard>
        </View>

        <MainButton onPress={() => goForward()}>Comenzar</MainButton>
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
