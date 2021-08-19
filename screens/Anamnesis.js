import React, { useState } from 'react';
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

  const [inputNumber, setInputNumber] = useState(0);
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

  let showInput;

  const goForward = () => {
    setInputNumber(inputNumber + 1);
  };

  const goBack = () => {
    setInputNumber(inputNumber - 1);
  };

  if (inputNumber === 0) {
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
                Instrucciones:
              </Text>
              <Text style={{ fontSize: 18 }}>
                Se le presentaran varias categorías, cada una contara con un
                grupo de preguntas únicas, tómese su tiempo para responderlas,
                esta información es confidencial y solo podrá ser vista por su
                psicólogo, el cual hará uso de esta para la construcción de su
                anamnesis.
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
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 600 }}>
            <ScrollView style={{ flex: 1 }}>
              <TouchableWithoutFeedback>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'left',
                      fontWeight: 'bold',
                      marginBottom: 15,
                    }}
                  >
                    General
                  </Text>
                  <View style={{ margin: 5 }}>
                    <Text>1. Cuál es su nivel educativo?</Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Nivel Educativo"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>2. Cuál es su ocupación?</Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Ocupación"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>3. Cuál es su estado civil?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Estado civil"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>4. Cuál es su religión?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Religión"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>5. Cuál es su dirección?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Dirección"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>6. Padece enfermedades o ha sido hospitalizado?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="..."
                        autoCapitalize="sentences"
                        numberOfLines={7}
                        multiline
                        height={50}
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>7. Hay antecedentes patologicos en su familia?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Antecedentes"
                        autoCapitalize="sentences"
                        numberOfLines={7}
                        multiline
                        height={50}
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>8. Cuál es el motivo de su consulta?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Motivo"
                        autoCapitalize="sentences"
                        numberOfLines={7}
                        multiline
                        height={50}
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
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
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 600 }}>
            <ScrollView style={{ flex: 1 }}>
              <TouchableWithoutFeedback>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'left',
                      fontWeight: 'bold',
                      marginBottom: 15,
                    }}
                  >
                    Infancia
                  </Text>
                  <View style={{ margin: 5 }}>
                    <Text>1. Cuál es el número de su gestación?</Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Gestación"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        keyboardType="decimal-pad"
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>2. Fue deseado?</Text>

                    <View style={styles.section}>
                      <RNPickerSelect
                        placeholder={{
                          label: 'Deseado?',
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
                        onValueChange={(five) =>
                          setBecks({ ...becks, five: five })
                        }
                        items={[
                          { label: 'Si', value: 'Si' },
                          {
                            label: 'No',
                            value: 'No',
                          },
                        ]}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>3. Fue aceptado?</Text>
                    <View style={styles.section}>
                      <RNPickerSelect
                        placeholder={{
                          label: 'Aceptado?',
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
                        onValueChange={(six) =>
                          setBecks({ ...becks, six: six })
                        }
                        items={[
                          { label: 'Si', value: 'Si' },
                          {
                            label: 'No',
                            value: 'No',
                          },
                        ]}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>4. Como fue el desarrollo de su gestación?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Desarrollo de gestación"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                        numberOfLines={7}
                        multiline
                        height={50}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>
                      5. Acontecimientos en el control médico prenatal?
                    </Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Control médico"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>6. Como nació?</Text>
                    <View style={styles.section}>
                      <RNPickerSelect
                        placeholder={{
                          label: 'Opciones',
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
                        onValueChange={(six) =>
                          setBecks({ ...becks, six: six })
                        }
                        items={[
                          { label: 'Parto', value: 'Parto' },
                          {
                            label: 'Cesarea',
                            value: 'Cesarea',
                          },
                        ]}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>
                      7. Nació con alguna enfermedad u ocurrió algún
                      acontecimiento significativo?
                    </Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Enfermedad"
                        autoCapitalize="sentences"
                        numberOfLines={7}
                        multiline
                        height={50}
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
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
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 470 }}>
            <ScrollView style={{ flex: 1 }}>
              <TouchableWithoutFeedback>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'left',
                      fontWeight: 'bold',
                      marginBottom: 15,
                    }}
                  >
                    Desarrollo
                  </Text>
                  <View style={{ margin: 5, marginBottom: 20 }}>
                    <Text>
                      1. Tuvo demoras o complicaciones en el desarrollo
                      psicomotor?
                    </Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Desarrollo Psicomotor"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        keyboardType="decimal-pad"
                        blurOnSubmit={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5, marginBottom: 20 }}>
                    <Text>
                      2. Tuvo demoras o complicaciones en el desarrollo del
                      lenguaje?
                    </Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Desarrollo del Lenguaje"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        keyboardType="decimal-pad"
                        blurOnSubmit={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>3. Cuáles son sus hábitos diarios?</Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Hábitos"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        keyboardType="decimal-pad"
                        blurOnSubmit={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
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
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 330 }}>
            <ScrollView style={{ flex: 1 }}>
              <TouchableWithoutFeedback>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'left',
                      fontWeight: 'bold',
                      marginBottom: 15,
                    }}
                  >
                    Educación
                  </Text>
                  <View style={{ margin: 5, marginBottom: 20 }}>
                    <Text>1. Edad de inicio?</Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Edad de inicio en la escuela"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        keyboardType="decimal-pad"
                        blurOnSubmit={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5, marginBottom: 20 }}>
                    <Text>
                      2. Como fue su proceso de adaptación social y académica en
                      la escuela?
                    </Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Adaptación"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
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
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 600 }}>
            <ScrollView style={{ flex: 1 }}>
              <TouchableWithoutFeedback>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'left',
                      fontWeight: 'bold',
                      marginBottom: 15,
                    }}
                  >
                    Adolescencia
                  </Text>
                  <View style={{ margin: 5 }}>
                    <Text>
                      1. Como fue su actitud ante los cambios físicos?
                    </Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Cambios Fisicos"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>2. Cuáles son sus intereses personales?</Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Intereses personales"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>3. Practica actividades deportivas?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Actividades deportivas"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>4. Realiza alguna actividad recreacional?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Actividades recreacionales"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                        numberOfLines={7}
                        multiline
                        height={50}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>5. Cuáles son sus hobbies?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Hobbies"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>6. Cuáles son sus pasatiempos</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Pasatiempos"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        numberOfLines={7}
                        multiline
                        height={50}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>7. Realizaba alguna actividad extraacadémica?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Actividades extra"
                        autoCapitalize="sentences"
                        numberOfLines={7}
                        multiline
                        height={50}
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
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
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 600 }}>
            <ScrollView style={{ flex: 1 }}>
              <TouchableWithoutFeedback>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      textAlign: 'left',
                      fontWeight: 'bold',
                      marginBottom: 15,
                    }}
                  >
                    Adultez
                  </Text>
                  <View style={{ margin: 5 }}>
                    <Text>1. Goza de educación superior?</Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Educación "
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        keyboardType="decimal-pad"
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>2. En qué consisten sus actividades laborales?</Text>

                    <View style={styles.section}>
                      <TextInput
                        placeholder="Actividades laborales"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        keyboardType="decimal-pad"
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>3. Cuál es su sexualidad?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Sexualidad"
                        autoCapitalize="sentences"
                        numberOfLines={7}
                        multiline
                        height={50}
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>4. A qué edad inicio su vida sexual?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder=" Vida sexual"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>5. Cuantas parejas ha tenido?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="# de parejas"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>6. Cuál es su preferencia sexual?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Preferencia sexual"
                        autoCapitalize="sentences"
                        numberOfLines={7}
                        multiline
                        height={50}
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>7. Cuáles son sus metas?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Metas"
                        autoCapitalize="sentences"
                        numberOfLines={7}
                        multiline
                        height={50}
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>8. Cuáles son sus expectativas de vida?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Expectativas"
                        autoCapitalize="sentences"
                        numberOfLines={7}
                        multiline
                        height={50}
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>9. Con cuantas personas vive?</Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="# de personas"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 5 }}>
                    <Text>
                      10. Que relación comparte con las personas con las que
                      vive ?
                    </Text>
                    <View style={styles.section}>
                      <TextInput
                        placeholder="Relación"
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        blurOnSubmit={false}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
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
          <BeckCard style={{ marginBottom: 15, marginTop: 60, height: 320 }}>
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
                  textAlign: 'left',
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}
              >
                Cuestionario Finalizado
              </Text>
              <Text
                style={{ marginBottom: 5, fontSize: 20, marginTop: 10 }}
              ></Text>
            </View>

            <Text style={{ marginTop: 20 }}>
              Selecciona una fecha para enviar los resultados.
            </Text>

            <View style={{ ...styles.section, paddingHorizontal: 15 }}>
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
