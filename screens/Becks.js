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
import moment from 'moment';
import MainButton from '../components/MainButton';
import Http from '../services/Http';
import RNPickerSelect from 'react-native-picker-select';
import BeckCard from '../components/BeckCard';
import CustomDatePicker from '../components/FutureDatePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Becks = (props) => {
  const data = props.navigation.getParam('data');
  const userId = data.userid;

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
    totalScore: '',
    userId: userId,
    testDate: moment(),
    sendDate: '',
  });

  const submitBecks = async () => {
    // setLoading(true);

    const data = await Http.send('POST', '/api/becks', becks);

    if (!data) {
      Alert.alert('Fatal Error', 'No data from server...');
    } else {
      switch (data.typeResponse) {
        case 'Success':
          console.log(data);
          break;

        case 'Fail':
          console.log('error');
          break;

        default:
          Alert.alert(data.typeResponse, data.message);
          break;
      }
    }

    // setLoading(false);
  };

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
    setBecks({ ...becks, totalScore: becksTotal.toString() });
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

  if (numTotal === 0) {
    showResult = <Text>Felicitaciones si tu total es 0!</Text>;
  }

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
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 310 }}>
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
                ha sentido las últimas dos semanas, incluyendo el día de hoy. Si
                varios enunciados de un mismo grupo le parecen igualmente
                apropiados, seleccione el número más alto.
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
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 230 }}>
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
                1.- Tristeza
              </Text>
              <Text style={{ marginBottom: 5 }}>0. No me siento triste.</Text>
              <Text style={{ marginBottom: 5 }}>
                1. Me siento triste gran parte del tiempo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Me siento triste todo el tiempo.
              </Text>
              <Text style={{ marginBottom: 3 }}>
                3. Me siento tan triste o soy tan infeliz que no puedo
                soportarlo
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.one}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(one) => setBecks({ ...becks, one: one })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 275, marginBottom: 15 }}>
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
                2.- Pesimismo
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No estoy desalentado respecto del mi futuro.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Me siento más desalentado respecto de mi futuro que lo que
                solía estarlo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. No espero que las cosas funcionen para mi.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Siento que no hay esperanza para mi futuro y que sólo puede
                empeorar.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.two}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    width: '100%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(two) => setBecks({ ...becks, two: two })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 2) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 255 }}>
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
                3.- Fracaso
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No me siento como un fracasado.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. He fracasado más de lo que hubiera debido.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Cuando miro hacia atrás, veo muchos fracasos.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Siento que como persona soy un fracaso total.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.three}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(three) => setBecks({ ...becks, three: three })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 275, marginBottom: 15 }}>
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
                4.- Pérdida de Placer
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. Obtengo tanto placer como siempre por las cosas de las que
                disfruto.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. No disfruto tanto de las cosas como solía hacerlo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Obtengo muy poco placer de las cosas que solía disfrutar.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. No puedo obtener ningún placer de las cosas de las que solía
                disfrutar.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.four}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(four) => setBecks({ ...becks, four: four })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 3) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 275 }}>
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
                5.- Sentimientos de Culpa
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No me siento particularmente culpable.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Me siento culpable respecto de varias cosas que he hecho o
                que debería haber hecho.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Me siento bastante culpable la mayor parte del tiempo.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Me siento bastante culpable la mayor parte del tiempo.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.five}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(five) => setBecks({ ...becks, five: five })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 210, marginBottom: 15 }}>
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
                6.- Sentimientos de Castigo
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No siento que este siendo castigado.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Siento que tal vez pueda ser castigado.
              </Text>
              <Text style={{ marginBottom: 5 }}>2. Espero ser castigado.</Text>
              <Text style={{ marginBottom: 0 }}>
                3. Siento que estoy siendo castigado.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.six}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(six) => setBecks({ ...becks, six: six })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 4) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 255 }}>
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
                7.- Disconformidad con uno mismo
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. Siento acerca de mi lo mismo que siempre.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. He perdido la confianza en mí mismo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Estoy decepcionado conmigo mismo.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. No me gusto a mí mismo.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.seven}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(seven) => setBecks({ ...becks, seven: seven })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 275, marginBottom: 15 }}>
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
                8.- Autocrítica
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No me critico ni me culpo más de lo habitual.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Estoy más crítico conmigo mismo de lo que solía estarlo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Me critico a mí mismo por todos mis errores.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Me culpo a mí mismo por todo lo malo que sucede.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.eight}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(eight) => setBecks({ ...becks, eight: eight })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 5) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 280 }}>
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
                9.- Pensamientos o Deseos Suicidas
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No tengo ningún pensamiento de matarme.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. He tenido pensamientos de matarme, pero no lo haría.
              </Text>
              <Text style={{ marginBottom: 5 }}>2. Querría matarme.</Text>
              <Text style={{ marginBottom: 0 }}>
                3. Me mataría si tuviera la oportunidad de hacerlo.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.nine}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(nine) => setBecks({ ...becks, nine: nine })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 210, marginBottom: 15 }}>
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
                10.- Llanto
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No lloro más de lo que solía hacerlo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Lloro más de lo que solía hacerlo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Lloro por cualquier pequeñez.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Siento ganas de llorar pero no puedo.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.ten}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(ten) => setBecks({ ...becks, ten: ten })}
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 6) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 290 }}>
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
                11.- Agitación
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No estoy más inquieto o tenso que lo habitual.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Me siento más inquieto o tenso que lo habitual.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Estoy tan inquieto o agitado que me es difícil quedarme
                quieto.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Estoy tan inquieto o agitado que tengo que estar siempre en
                movimiento o haciendo algo.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.eleven}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(eleven) =>
                  setBecks({ ...becks, eleven: eleven })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 255, marginBottom: 15 }}>
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
                12.- Pérdida de Interés
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No he perdido el interés en otras actividades o personas.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Estoy menos interesado que antes en otras personas o cosas.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. He perdido casi todo el interés en otras personas o cosas.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Me es difícil interesarme por algo.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.twelve}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(twelve) =>
                  setBecks({ ...becks, twelve: twelve })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 7) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 275 }}>
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
                13.- Indecisión
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. Tomo mis propias decisiones tan bien como siempre.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Me resulta más difícil que de costumbre tomar decisiones.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Encuentro mucha más dificultad que antes para tomar
                decisiones.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Tengo problemas para tomar cualquier decisión.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.thirteen}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(thirteen) =>
                  setBecks({ ...becks, thirteen: thirteen })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 245, marginBottom: 15 }}>
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
                14.- Desvalorización
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No siento que yo no sea valioso.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. No me considero a mi mismo tan valioso y útil como solía
                considerarme.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. No me considero a mi mismo tan valioso y útil como solía
                considerarme.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Siento que no valgo nada.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.fourteen}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(fourteen) =>
                  setBecks({ ...becks, fourteen: fourteen })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 8) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 255 }}>
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
                15.- Pérdida de Energía
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. Tengo tanta energía como siempre.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Tengo menos energía que la que solía tener.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. No tengo suficiente energía para hacer demasiado.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. No tengo energía suficiente para hacer nada.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.fifteen}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(fifteen) =>
                  setBecks({ ...becks, fifteen: fifteen })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 295, marginBottom: 15 }}>
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
                16.- Cambios en los Hábitos de Sueño
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. Puedo dormir tan bien como de costumbre.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. No duermo tan bien como solía hacerlo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Me despierto una o dos horas antes de lo habitual y me cuesta
                volver a dormirme.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Me despierto varias horas antes de lo que solía hacerlo y no
                puedo volver a dormir.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.sixteen}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(sixteen) =>
                  setBecks({ ...becks, sixteen: sixteen })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 9) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 220 }}>
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
                17.- Irritabilidad
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No estoy tan irritable que lo habitual.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Estoy más irritable que lo habitual.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Estoy mucho más irritable que lo habitual.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Estoy irritable todo el tiempo.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.seventeen}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(seventeen) =>
                  setBecks({ ...becks, seventeen: seventeen })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 275, marginBottom: 15 }}>
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
                18.- Cambios en el Apetito
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No he experimentado ningún cambio en mi apetito.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Mi apetito es un poco menor o mayor que lo habitual.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Mi apetito es mucho menor o mayor que antes.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. No tengo apetito en absoluto o quiero comer todo el dia.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.eighteen}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(eighteen) =>
                  setBecks({ ...becks, eighteen: eighteen })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 10) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 295 }}>
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
                19.- Dificultad de Concentración
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. Puedo concentrarme tan bien como siempre.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. No puedo concentrarme tan bien como habitualmente.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Me es difícil mantener la mente en algo por mucho tiempo.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Encuentro que no puedo concentrarme en nada.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.nineteen}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(nineteen) =>
                  setBecks({ ...becks, nineteen: nineteen })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
            </View>
          </BeckCard>
        </View>

        <View>
          <BeckCard style={{ height: 305, marginBottom: 5 }}>
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
                20.- Cansancio o Fatiga
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No estoy más cansado o fatigado que lo habitual.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Me fatigo o me canso más fácilmente que lo habitual.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Estoy demasiado fatigado o cansado para hacer muchas de las
                cosas que solía hacer.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. Estoy demasiado fatigado o cansado para hacer la mayoría de
                las cosas que solía hacer.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.twenty}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(twenty) =>
                  setBecks({ ...becks, twenty: twenty })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
  if (inputNumber === 11) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 295 }}>
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
                21.- Pérdida de Interés en el Sexo
              </Text>
              <Text style={{ marginBottom: 5 }}>
                0. No he notado ningún cambio reciente en mi interés por el
                sexo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                1. Estoy menos interesado en el sexo de lo que solía estarlo.
              </Text>
              <Text style={{ marginBottom: 5 }}>
                2. Estoy menos interesado en el sexo de lo que solía estarlo.
              </Text>
              <Text style={{ marginBottom: 0 }}>
                3. He perdido completamente el interés en el sexo.
              </Text>
            </View>

            <View style={styles.section}>
              <RNPickerSelect
                value={becks.twentyone}
                placeholder={{
                  label: 'Selección',
                  color: 'black',
                }}
                style={{
                  inputIOS: {
                    paddingLeft: 10,
                    paddingTop: 3,
                    color: 'black',
                    overflow: 'visible',
                  },
                }}
                onValueChange={(twentyone) =>
                  setBecks({ ...becks, twentyone: twentyone })
                }
                items={[
                  { label: '0', value: '0' },
                  {
                    label: '1',
                    value: '1',
                  },
                  { label: '2', value: '2' },
                  {
                    label: '3',
                    value: '3',
                  },
                ]}
              />
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
          <MainButton onPress={() => getTotal()}>Siguiente</MainButton>
        </View>
      </View>
    );
  }
  if (inputNumber === 12) {
    showInput = (
      <View style={styles.inputContainer}>
        <View>
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 390 }}>
            <View
              style={{
                padding: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}
              >
                Total:
              </Text>
              <Text style={{ marginBottom: 5, fontSize: 20, marginTop: 10 }}>
                {total}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 15 }}>Resultado: {showResult}</Text>
            </View>

            <Text style={{ marginTop: 20, fontSize: 15 }}>
              Este resultado, asi como las selecciones sera enviadas al email de
              su psicologo.
            </Text>

            <Text style={{ marginTop: 20 }}>
              Selecciona una fecha para enviar los resultados.
            </Text>

            <View style={styles.section}>
              <Ionicons name="calendar" size={20} color="black" />

              <CustomDatePicker
                value={becks.sendDate}
                onDateChange={(value) =>
                  setBecks({ ...becks, sendDate: value })
                }
              >
                Fecha de envio
              </CustomDatePicker>
            </View>
            <MainButton
              onPress={() => submitBecks()}
              style={{ backgroundColor: '#93c3a1' }}
            >
              Guardar
            </MainButton>
          </BeckCard>
        </View>

        <View></View>

        <MainButton onPress={() => console.log(becks)}>Finalizar</MainButton>
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

export default Becks;
